import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.color.teal};
  border-radius: 5px;
  transition: background-color 0.3s;

  &.active {
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
  padding: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;
