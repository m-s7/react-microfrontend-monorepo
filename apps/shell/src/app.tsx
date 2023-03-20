import React, { useState } from 'react';
import icon from '@/assets/icon.png';
import { Button } from '@/components';
import { debounce } from '@/utils';
import { Container, Heading, HelloText, Icon, Text } from '@/app.styled';
import { isEven } from 'is-even';

export const App = () => {
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
    console.log(isEven(2));
  }, 950);

  return (
    <Container>
      <Icon src={icon} alt="React Icon" />
      <Heading>React Minimal Boilerplate</Heading>
      <Text>(React18 + TypeScript + Webpack5 + SCSS + Jest + ESLint)</Text>
      <Button
        onClick={() => {
          setIsHello(true);
          clickHandler();
        }}
      >
        Say Hello!
      </Button>
      <HelloText isVisible={isHello}>Hello</HelloText>
    </Container>
  );
};
