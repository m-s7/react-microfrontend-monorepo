import React from 'react';
import { App } from '@/app';
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('app', () => {
  let button: HTMLElement;
  let paragraph: HTMLElement;
  beforeEach(() => {
    const { getByTestId } = render(<App />);
    button = getByTestId('button-test');
    paragraph = getByTestId('hello-text-test');
  });

  it('displays hello text after clicking on a button', () => {
    jest.useFakeTimers();

    act(() => {
      button.click();
    });

    expect(paragraph.textContent).toContain('Hello');
    expect(paragraph).toBeVisible();

    jest.useRealTimers();
  });

  it('hides hello text after 950ms', () => {
    jest.useFakeTimers();

    act(() => {
      button.click();
      jest.advanceTimersByTime(950);
    });

    expect(paragraph).not.toBeVisible();

    jest.useRealTimers();
  });
});
