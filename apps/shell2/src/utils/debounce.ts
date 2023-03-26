type Fn<T extends Array<unknown>> = (...args: T) => unknown;
export const debounce = <T extends Array<unknown>>(fn: Fn<T>, timeout = 0): Fn<T> => {
  let timeoutId = 0;

  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      fn(...args);
    }, timeout);
  };
};
