import { debounce } from '@/utils';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(window, 'setTimeout');
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('waits 1000ms before calling function', () => {
    const fnMock = jest.fn();
    debounce(fnMock, 1000)();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    jest.advanceTimersByTime(1000);

    expect(fnMock).toHaveBeenCalledTimes(1);
  });

  it('call function only once after 500ms', () => {
    const fnMock = jest.fn();
    const runner = debounce(fnMock, 500);

    runner();
    runner();
    runner();

    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);

    jest.advanceTimersByTime(500);

    expect(fnMock).toHaveBeenCalledTimes(1);
  });
});
