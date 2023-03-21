import React, { FC } from 'react';
import { Container, Content, NavContainer, NavItem, NavLink } from './layout.styled';
import { Outlet, matchRoutes, useLocation } from 'react-router-dom';

export const Layout: FC = () => {
  const location = useLocation();

  return (
    <Container>
      <nav>
        <NavContainer>
          <NavItem>
            <NavLink to="/" $isActive={!!matchRoutes([{ path: '/' }], location)}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin" $isActive={!!matchRoutes([{ path: '/admin' }], location)}>
              Admin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/health" $isActive={!!matchRoutes([{ path: '/health' }], location)}>
              Health
            </NavLink>
          </NavItem>
        </NavContainer>
      </nav>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
