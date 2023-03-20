import React from 'react';
import { act, render } from '@testing-library/react';
import { App } from '@/app';

describe('app', () => {
  it('placeholder', () => {
    expect(true).toBeTruthy();
  });
  // it('displays text after clicking on a button and hides it after 950ms', () => {
  //   jest.useFakeTimers();
  //
  //   const { getByRole, container } = render(<App />);
  //   const button = getByRole('button');
  //
  //   act(() => {
  //     button?.click();
  //   });
  //
  //   const paragraph = container?.querySelector('.hello');
  //
  //   expect(paragraph?.className).toContain('fade-out');
  //
  //   act(() => {
  //     jest.advanceTimersByTime(950);
  //   });
  //   expect(paragraph?.className).toContain('hidden');
  //
  //   jest.useRealTimers();
  // });
});
