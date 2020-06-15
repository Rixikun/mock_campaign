import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux/store";
import * as C from "./components/content";

import style from "./style.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <C.Header />

          <Switch>
            <Route path="/About" component={C.AboutCandidate} />
            <Route path="/Stances" component={C.Stances} />
            <Route path="/Endorsement" component={C.Endorsement} />
            <Route path="/Volunteer" component={C.Volunteer} />
            <Route path="/Donate" component={C.Donate} />
            <Route path="/Merchandise" component={C.Merchandise} />
            <Route path="/HowTo" component={C.HowTo} />
            <Route path="/" component={C.Home} />
          </Switch>

          <C.Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
