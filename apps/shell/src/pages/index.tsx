import React, { useState } from 'react';
import icon from '../assets/icon.png';
import { Layout } from '../layouts';
import { Container, Heading, HelloText, Icon, Text } from './index.styled';
import { Button } from '../components';
import { debounce } from '../utils';

export const Home = () => {
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
  }, 950);

  return (
    <Container>
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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
