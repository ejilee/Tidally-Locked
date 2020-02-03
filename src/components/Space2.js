import React, { useState, useCallback } from "react";
import Interface from "./Interface";
import Planet from "./Planet";
import Moon from "./Moon";
import "./Space2.scss";

const Space2 = () => {
  const [periods, setPeriods] = useState({
    rotPer: 10,
    orbPer: 10
  });
  const settingRotOrbPer = form => {
    console.log("beech");
    const newPeriods = {
      rotPer: form.rotPer,
      orbPer: form.orbPer
    };
    console.log(newPeriods);
    setPeriods(newPeriods);
  };
  // const moveIt = useCallback(() => {
  //   setInterval(() => {}, 500);
  // }, []);
  // moveIt();
  return (
    <div className="spaceContainer2">
      <Planet />
      <Moon rotPer={periods.rotPer} orbPer={periods.orbPer} />
      <Interface
        rotPer={periods.rotPer}
        orbPer={periods.orbPer}
        settingRotOrbPer={settingRotOrbPer}
      />
    </div>
  );
};

export default Space2;
