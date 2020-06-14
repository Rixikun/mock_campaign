import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import store from "./redux/store";

import * as C from "./components/content";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <C.Header />

          <Switch>
            <Route path="/About">
              <C.AboutCandidate />
            </Route>
            <Route path="/Stances">
              <C.Stances />
            </Route>
            <Route path="/Endorsement">
              <C.Endorsement />
            </Route>
            <Route path="/Volunteer">
              <C.Volunteer />
            </Route>
            <Route path="/Donate">
              <C.Donate />
            </Route>
            <Route path="/Merchandise">
              <C.Merchandise />
            </Route>
            <Route path="/">
              <C.Home />
            </Route>
          </Switch>

          <C.Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
