// eslint-disable-next-line import/prefer-default-export
export const debounce = (cb: () => void, delay: number = 400) => {
  let timer;

  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(), delay);
  };
};
