import { faker } from '@faker-js/faker';
import { add, startOfToday } from 'date-fns';
import { scaleTime } from 'd3-scale';

import type {
  Task,
  Tasks,
  User,
  Users,
} from './constants';

import { TASK_STATUS, DAY_WIDTH, OUTLINE_WIDTH } from './constants';

const {
  string,
  company,
  date,
  helpers,
  person,
} = faker;

const today = startOfToday();

/**
 * Creates a fake user
 * @returns User
 */
export const getFakeUser = (): User => ({
  id: string.uuid(),
  firstName: person.firstName(),
  lastName: person.lastName(),
  avatar: faker.image.avatar(),
});

/**
 * Gets a list of users keyed by the user id.
 * @param numOfUsers
 * @returns Users
 */
export const getFakeUsers = (numOfUsers = 12): Users => (
  [...Array(numOfUsers).keys()].reduce((users) => {
    const user = getFakeUser();

    return { ...users, [user.id]: user };
  }, {})
);

/**
 * Creates a fake task
 * @param override
 * @returns Task
 */
export const getFakeTask = (override: Partial<Task> = {}): Task => {
  const today = new Date();
  const minDate = add(today, { months: -1 });
  const startDate = date.between({ from: minDate, to: today });
  const dueDate = date.between({ from: startDate, to: add(startDate, { months: 1 }) });

  return {
    id: string.uuid(),
    title: company.buzzPhrase(),
    startDate,
    dueDate,
    status: helpers.arrayElement(TASK_STATUS),
    ...override,
  };
};

/**
 * Gets a list of fake tasks
 * @param users
 * @param numOfTasks
 * @returns Tasks
 */
export const getFakeTasks = (users: User[], numOfTasks = 25): Tasks => (
  [...Array(numOfTasks).keys()].reduce((tasks) => {
    const user = helpers.arrayElement([...users, null]);
    const task = getFakeTask({ userId: user?.id || null });

    return { ...tasks, [task.id]: task };
  }, {})
);

/**
 * Gets the initial date scale based on the total width
 * @param totalWidth
 * @returns
 */
export const getDateScale = (totalWidth: number) => {
  const visibleArea = totalWidth - OUTLINE_WIDTH;
  const daysBeforeToday = (OUTLINE_WIDTH + (visibleArea / 2)) / DAY_WIDTH;
  const daysAfterToday = (visibleArea / 2) / DAY_WIDTH;
  const startDate = add(today, { days: -daysBeforeToday });
  const endDate = add(today, { days: daysAfterToday });

  return scaleTime().domain([startDate, endDate]).rangeRound([0, totalWidth]);
};
