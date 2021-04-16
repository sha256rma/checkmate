import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
