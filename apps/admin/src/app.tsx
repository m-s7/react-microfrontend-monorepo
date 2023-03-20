import React from 'react';
import { isEven } from 'is-even';
import { Container } from '@/app.styled';

const getIsEventText = (num: number): string => (isEven(num) ? 'Yes' : 'No');

export const App = () => {
  return (
    <Container>
      <h1>Admin</h1>
      <div>Is 1 even: {getIsEventText(7)}</div>
      <div>Is 2 even: {getIsEventText(2)}</div>
    </Container>
  );
};
