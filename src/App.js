import React from "react";
import { Provider } from "react-redux";

import * as Components from "./components/content";

function App() {
  return (
    <div className="App">
      <Components.Home />
    </div>
  );
}

export default App;
