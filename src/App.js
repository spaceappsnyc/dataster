import React from "react";
import "./App.css";
import { DeviceMap } from "./components/DeviceMap/DeviceMap.jsx";

const position = [5.2911, 103.6436];

function App() {
  return (
    <div>
      <DeviceMap position={position} />
    </div>
  );
}

export default App;
