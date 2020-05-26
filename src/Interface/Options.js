import React, { useState, useCallback } from "react";

const Options = ({
    rotPer,
    orbPer,
    orbRad,
    mooSiz,
    plaSiz,
    sunDir,
    setRotOrbPer,
    setOrbRad,
    setBodySize,
    setSunDirecttion
}) => {
    const [form, setForm] = useState({
        rotationalPeriod: rotPer,
        orbitalPeriod: orbPer,
        orbitRadius: orbRad,
        moonSize: mooSiz,
        planetSize: plaSiz,
        sunDirection: sunDir
    });

    const changeInputValue = useCallback(
        e => {
            const nextForm = {
                ...form,
                [e.target.name]: e.target.value
            };
            setForm(nextForm);
        },
        [form]
    );

    const onSubmit = useCallback(
        e => {
            setRotOrbPer(form.rotationalPeriod, form.orbitalPeriod);
            setOrbRad(form.orbitRadius);
            setBodySize(form.moonSize, form.planetSize);
            setSunDirecttion(form.sunDirection);
            e.preventDefault();
        },
        [setRotOrbPer, setOrbRad, setBodySize, setSunDirecttion, form]
    );

    return (
        <div className="uiBox">
            <form onSubmit={onSubmit}>
                Orbit radius :<br />
                <input
                    type="number"
                    name="orbitRadius"
                    value={form.orbitRadius}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                Rotational period :<br />
                <input
                    type="number"
                    name="rotationalPeriod"
                    value={form.rotationalPeriod}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                Orbital period :<br />
                <input
                    type="number"
                    name="orbitalPeriod"
                    value={form.orbitalPeriod}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                Earth size :<br />
                <input
                    type="number"
                    name="planetSize"
                    value={form.planetSize}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                Moon size :<br />
                <input
                    type="number"
                    name="moonSize"
                    value={form.moonSize}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                Direction of Light :<br />
                <input
                    type="number"
                    name="sunDirection"
                    value={form.sunDirection}
                    onChange={changeInputValue}
                />
                <br />
                <br />
                <button type="submit">SET</button>
            </form>
        </div>
    );
};

export default Options;
