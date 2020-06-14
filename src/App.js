import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import * as C from "./components/content";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <C.Header />
        <C.Home />
        <C.Merchandise />
        <C.Footer />
      </div>
    </Provider>
  );
}

export default App;
