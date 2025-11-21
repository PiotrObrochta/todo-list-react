import { Nav, List, StyledNavLink } from "./styled";
import { toAuthor, toTasks } from "../../routes";

const Navigation = () => (
  <Nav>
    <List>
      <StyledNavLink to={toTasks()}>Lista zadań</StyledNavLink>
      <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
    </List>
  </Nav>
);

export default Navigation;
