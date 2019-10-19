import React from "react";

import { DeviceMap } from "./components/DeviceMap/DeviceMap.jsx";
import { RightNavDrawer } from "./components/RightNavDrawer/RightNavDrawer.jsx";
import { GlobalProvider } from "./GlobalContext.jsx";

import "./App.css";

const defaultState = {
  position: [0, 0]
};

function App() {
  const [state, setState] = React.useState(defaultState);

  return (
    <div>
      <GlobalProvider value={{ state, setState }}>
        <DeviceMap position={state.position} />
        <RightNavDrawer />
      </GlobalProvider>
    </div>
  );
}

export default App;
