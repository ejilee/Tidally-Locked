import React, { useReducer, useCallback } from "react";
import Interface from "./Interface";
import Planet from "./Planet";
import Moon from "./Moon";
import "./Space.scss";

const initialSetting = {
    rotationalPeriod: 10,
    orbitalPeriod: 10,
    orbitRadius: 150,
    moonSize: 30,
    planetSize: 90,
};

function settingReducer(setting, action){
  switch (action.type){
    case 'ROTATIONAL_PERIOD':
      return {...setting, rotationalPeriod : action.rotPer};
    case 'ORBITAL_PERIOD':
      return {...setting, orbitalPeriod : action.orbPer};
    case 'ORBIT_RADIUS':
      return {...setting, orbitRadius : action.orbRad};
    case 'MOON_SIZE':
      return {...setting, moonSize : action.mooSiz};
    case 'PLANET_SIZE':
        return {...setting, planetSize : action.plaSiz};
    default :
      return setting;
  }
}

const Space = () => {

  const [setting, dispatchSetting] = useReducer(settingReducer, initialSetting);

  const setRotOrbPer = useCallback((rotPer, orbPer) =>{
    dispatchSetting({type: 'ROTATIONAL_PERIOD', rotPer});
    dispatchSetting({type: 'ORBITAL_PERIOD', orbPer});
  }, []
  );

  const setOrbRad = useCallback((orbRad) =>{
    dispatchSetting({type: 'ORBIT_RADIUS', orbRad});
  }, []
  );

  const setBodySize = useCallback((mooSiz, plaSiz) => {
    dispatchSetting({type: 'MOON_SIZE', mooSiz});
    dispatchSetting({type: 'PLANET_SIZE', plaSiz});
  },[]);

  return (
    <div className="spaceContainer">
      <Planet
        plaSiz={setting.planetSize}
      />
      <Moon 
        rotPer={setting.rotationalPeriod}
        orbPer={setting.orbitalPeriod}
        orbRad={setting.orbitRadius}
        mooSiz={setting.moonSize}
      />
      <Interface
        rotPer={setting.rotationalPeriod}
        orbPer={setting.orbitalPeriod}
        orbRad={setting.orbitRadius}
        mooSiz={setting.moonSize}
        plaSiz={setting.planetSize}
        setRotOrbPer={setRotOrbPer}
        setOrbRad={setOrbRad}
        setBodySize={setBodySize}
      />
    </div>
  );
};

export default Space;
