import { Nav, List, StyledNavLink } from "./styled";

const Navigation = () => (
  <Nav>
    <List>
      <StyledNavLink to="/zadania">Lista zadań</StyledNavLink>
      <StyledNavLink to="/autor">O autorze</StyledNavLink>
    </List>
  </Nav>
);

export default Navigation;
