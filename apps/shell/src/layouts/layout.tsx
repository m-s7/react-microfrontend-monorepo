import React, { useEffect, useState } from 'react';
import { Container, Content, NavContainer, NavItem, NavLink } from './layout.styled';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AuthContext } from '../business';

export const Layout = (props: React.PropsWithChildren) => {
  const [authToken, setAuthToken] = useState('initial');
  const router = useRouter();

  console.log(router.pathname)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAuthToken(`token-${Math.random()}`);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ authToken }}>
      <Head>
        <title>Shell</title>
        <meta name="description" content="Shell app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <nav>
            <NavContainer>
              <NavItem>
                <NavLink href="/" $isActive={router.pathname === '/'}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin" $isActive={router.pathname === '/admin'}>
                  Admin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/health" $isActive={router.pathname === '/health'}>
                  Health
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings" $isActive={router.pathname === '/settings'}>
                  Settings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings/general" $isActive={router.pathname === '/settings/general'}>
                  General Settings
                </NavLink>
              </NavItem>
            </NavContainer>
          </nav>
          <Content>{props.children}</Content>
        </Container>
      </main>
    </AuthContext.Provider>
  );
};
