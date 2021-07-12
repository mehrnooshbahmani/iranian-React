import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Maduale } from './Components';
import {Muduale as Md1} from "./Pages"


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <Md1.Login  />
          </Route>
          <Route exact path="/login/verify">
            <Md1.Verify />
          </Route>
          <Route exact path="/list">
            <Md1.DataList />
          </Route>
          <Route exact path="/edit">
            <Md1.Edit />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
