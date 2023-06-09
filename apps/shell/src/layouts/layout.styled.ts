import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavContainer = styled.ul`
  margin: 16px;
  list-style-type: none;
`;

export const NavItem = styled.li`
  display: inline;
  padding: 4px;
`;

type NavLinkProps = { $isActive: boolean };
export const NavLink = styled(Link)<NavLinkProps>`
  text-decoration: none;
  color: #f1f1f1;

  ${(props) =>
    props.$isActive &&
    css`
      text-decoration: underline;
    `}

  &:hover {
    color: #c9c9c9;
  }
`;
