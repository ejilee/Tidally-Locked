import React, { useState } from "react";
import Interface from "./Interface";
import Planet from "./Planet";
import Moon from "./Moon";
import "./Space.scss";

const Space = () => {
  const [periods, setPeriods] = useState({
    rotPer: 5,
    orbPer: 5
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
  return (
    <div className="spaceContainer">
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

export default Space;
