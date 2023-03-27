import React, { useState } from 'react';
import icon from '../assets/icon.png';
import { Layout } from '../layouts';
import { Button } from '../components';
import { debounce } from '../utils';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 14rem;
  height: 12.5rem;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  margin-bottom: 0.6rem;
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const HelloText = styled.p<{ isVisible: boolean }>`
  padding: 1rem;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isVisible ? 'fadeOut' : 'fadeIn')} ease 1s;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Home = () => {
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
  }, 950);

  return (
    <Container>
      <Icon src={icon} alt="React Icon" />
      <Heading>Shell</Heading>
      <Text>(NextJS Microfrontend Container App)</Text>
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
