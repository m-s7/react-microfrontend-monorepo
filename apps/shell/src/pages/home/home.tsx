import React, { useState } from 'react';
import icon from '@/assets/icon.png';
import { Button } from '@/components';
import { debounce } from '@/utils';
import { Heading, HelloText, Icon, Text } from './home.styled';

export const Home = () => {
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
  }, 950);

  return (
    <>
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
      <HelloText data-testid="hello-text-test" isVisible={isHello}>
        Hello
      </HelloText>
    </>
  );
};
