import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../index';

describe('debounce', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<Button>Increment</Button>);

    expect(getByText('Increment')).toBeTruthy();
  });

  it('calls function passed by onClick prop', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickMock}>Increment</Button>
    );
    getByRole('button').click();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
