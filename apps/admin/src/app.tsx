import React, { useContext } from 'react';
import { isEven } from 'is-even';
import { Container } from '@/app.styled';
import MyContext from 'shared-context';

const getIsEventText = (num: number): string => (isEven(num) ? 'Yes' : 'No');

export const App = (props: any) => {
  const { name } = useContext(MyContext);
  console.log(props);

  return (
    <Container>
      {name}
      <h1>Admin</h1>
      <div>Is 1 even: {getIsEventText(7)}</div>
      <div>Is 2 even: {getIsEventText(2)}</div>
    </Container>
  );
};

export default App;
