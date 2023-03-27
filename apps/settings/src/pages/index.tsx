import { ShellContextProps } from 'shared-context';
import { isEven } from 'is-even';
import styled from 'styled-components';

const getIsEventText = (num: number): string => (isEven(num) ? 'Yes' : 'No');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Index = (props: ShellContextProps) => {
  return (
    <Container>
      {props.authToken}
      <h1>Settings</h1>
      <div>Is 5 even: {getIsEventText(3)}</div>
      <div>Is 6 even: {getIsEventText(4)}</div>
    </Container>
  );
};

export default Index;
