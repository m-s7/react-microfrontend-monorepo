import React, { useState } from 'react';
import icon from '@/assets/icon.png';
import { Button } from '@/components';
import { debounce } from '@/utils';
import { Container, Heading, HelloText, Icon, Text } from '@/app.styled';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Admin = React.lazy(() => import('admin/Admin'));

export const App = () => {
  const [isHello, setIsHello] = useState(false);

  const clickHandler = debounce(() => {
    setIsHello(false);
  }, 950);

  return (
    <Container>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </React.Suspense>
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
    </Container>
  );
};
