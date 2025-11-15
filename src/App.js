import TasksPage from "./features/tasks/TasksPage/TasksPage";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/zadania">Zadania</NavLink>
        </li>
        <li>
          <NavLink to="/autor">O autorze</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;
