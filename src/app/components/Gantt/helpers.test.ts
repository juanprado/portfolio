import { TASK_STATUS } from './constants';
import {
  getFakeUser,
  getFakeUsers,
  getFakeTask,
  getFakeTasks,
} from './helpers';

describe('Gantt helpers suite', () => {
  it('Returns a fake user', () => {
    const fakeUser = getFakeUser();

    expect(fakeUser).toHaveProperty('id');
    expect(typeof fakeUser.id).toBe('string');
    expect(fakeUser).toHaveProperty('firstName');
    expect(typeof fakeUser.firstName).toBe('string');
    expect(fakeUser).toHaveProperty('lastName');
    expect(typeof fakeUser.lastName).toBe('string');
    expect(fakeUser).toHaveProperty('avatar');
    expect(typeof fakeUser.avatar).toBe('string');
  });

  it('Returns a list fake users', () => {
    const users = getFakeUsers();
    const userIds = Object.keys(users);

    expect(userIds.length).toBe(12); // 12 by default

    userIds.forEach((userId) => {
      const fakeUser = users[userId];

      expect(fakeUser).toHaveProperty('id', userId);
      expect(fakeUser).toHaveProperty('firstName');
      expect(fakeUser).toHaveProperty('lastName');
      expect(fakeUser).toHaveProperty('avatar');
    });
  });

  it('Returns a fake task', () => {
    const fakeTask = getFakeTask();

    expect(fakeTask).toHaveProperty('id');
    expect(typeof fakeTask.id).toBe('string');
    expect(fakeTask).toHaveProperty('title');
    expect(typeof fakeTask.title).toBe('string');
    expect(fakeTask).toHaveProperty('startDate');
    expect(fakeTask.startDate).toBeInstanceOf(Date);
    expect(fakeTask).toHaveProperty('dueDate');
    expect(fakeTask.dueDate).toBeInstanceOf(Date);
    expect(TASK_STATUS.includes(fakeTask.status)).toBeTruthy();
  });

  it('Returns a list fake tasks', () => {
    const users = getFakeUsers();
    const tasks = getFakeTasks(Object.values(users), 12);
    const taskIds = Object.keys(tasks);

    expect(taskIds.length).toBe(12);

    taskIds.forEach((taskId) => {
      const task = tasks[taskId];
      const { userId } = task;
      const expected = userId ? userId in users : userId === null;

      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('title');
      expect(task).toHaveProperty('startDate');
      expect(task).toHaveProperty('dueDate');
      expect(TASK_STATUS.includes(task.status)).toBeTruthy();
      expect(expected).toBeTruthy();
    });
  });
});
