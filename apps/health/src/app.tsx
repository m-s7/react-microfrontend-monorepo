import React from 'react';
import { isEven } from 'is-even';
import { Container } from './app.styled';

const getIsEventText = (num: number): string => (isEven(num) ? 'Yes' : 'No');

const App = () => {
  return (
    <Container>
      <h1>Health</h1>
      <div>Is 3 even: {getIsEventText(3)}</div>
      <div>Is 4 even: {getIsEventText(4)}</div>
    </Container>
  );
};

export default App