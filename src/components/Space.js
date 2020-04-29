import React, { useReducer, useCallback } from "react";
import Planet from "./Planet";
import OrbitLine from "./OrbitLine";
import Moon from "./Moon";
import Interface from "./Interface";
import "./Space.scss";

const initialSetting = {
    rotationalPeriod: 30,
    orbitalPeriod: 30,
    orbitRadius: 100,
    moonSize: 30,
    planetSize: 90,
    sunDirection: 100
};

function settingReducer(setting, action) {
    switch (action.type) {
        case "ROTATIONAL_PERIOD":
            return { ...setting, rotationalPeriod: action.rotPer };
        case "ORBITAL_PERIOD":
            return { ...setting, orbitalPeriod: action.orbPer };
        case "ORBIT_RADIUS":
            return { ...setting, orbitRadius: action.orbRad };
        case "MOON_SIZE":
            return { ...setting, moonSize: action.mooSiz };
        case "PLANET_SIZE":
            return { ...setting, planetSize: action.plaSiz };
        case "SUN_DIRECTION":
            return { ...setting, sunDirection: action.sunDir };
        default:
            return setting;
    }
}

const Space = () => {
    const [setting, dispatchSetting] = useReducer(
        settingReducer,
        initialSetting
    );

    const setRotOrbPer = useCallback((rotPer, orbPer) => {
        dispatchSetting({ type: "ROTATIONAL_PERIOD", rotPer });
        dispatchSetting({ type: "ORBITAL_PERIOD", orbPer });
    }, []);

    const setOrbRad = useCallback(orbRad => {
        dispatchSetting({ type: "ORBIT_RADIUS", orbRad });
        console.log(orbRad);
    }, []);

    const setBodySize = useCallback((mooSiz, plaSiz) => {
        dispatchSetting({ type: "MOON_SIZE", mooSiz });
        dispatchSetting({ type: "PLANET_SIZE", plaSiz });
    }, []);

    const setSunDirecttion = useCallback(sunDir => {
        dispatchSetting({ type: "SUN_DIRECTION", sunDir });
    }, []);

    return (
        <div className="spaceContainer">
            <Planet plaSiz={setting.planetSize} sunDir={setting.sunDirection} />
            <OrbitLine orbRad={setting.orbitRadius} />
            <Moon
                rotPer={setting.rotationalPeriod}
                orbPer={setting.orbitalPeriod}
                orbRad={setting.orbitRadius}
                mooSiz={setting.moonSize}
                sunDir={setting.sunDirection}
            />
            <Interface
                rotPer={setting.rotationalPeriod}
                orbPer={setting.orbitalPeriod}
                orbRad={setting.orbitRadius}
                mooSiz={setting.moonSize}
                plaSiz={setting.planetSize}
                sunDir={setting.sunDirection}
                setRotOrbPer={setRotOrbPer}
                setOrbRad={setOrbRad}
                setBodySize={setBodySize}
                setSunDirecttion={setSunDirecttion}
            />
        </div>
    );
};

export default Space;
