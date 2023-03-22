import React, { useState } from 'react';
import icon from '../../assets/icon.png';
import { Button } from '../../components';
import { debounce } from '../../utils';
import { Container, Heading, HelloText, Icon, Text } from './home.styled';
import MyContext from 'shared-context';

export const Home = () => {
  const { name } = React.useContext(MyContext);
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
  }, 950);

  return (
    <Container>
      {name}
      <Icon src={icon} alt="React Icon" />
      <Heading>Shell</Heading>
      <Text>(Microfrontend Container App)</Text>
      <Button
        onClick={() => {
          setIsHello(true);
          clickHandler();
        }}
      >
        Say Hello!
      </Button>
      <HelloText data-testid="hello-text-test" isVisible={isHello}>
        Hello
      </HelloText>
    </Container>
  );
};
