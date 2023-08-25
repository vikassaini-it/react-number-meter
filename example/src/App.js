import React, { useState } from "react";
import RollingMeterDemo from "./demo/RollingMeterDemo";
import ShiftingMeterDemo from "./demo/ShiftingMeterDemo";
import OdoMeterDemo from "./demo/OdoMeterDemo";
import "react-meter/dist/index.css";


const App = () => {
  
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 style={{ fontSize: "3rem" }}>REACT NUMBER METER</h1>
      <div className="w-100 d-flex justify-content-center flex-wrap mt-5 gap-5">
        <ShiftingMeterDemo />
        <RollingMeterDemo />
        <OdoMeterDemo/>
      </div>
    </div>
  );
};

export default App;
