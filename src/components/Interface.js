import React, { useState, useCallback } from "react";

const Interface = ({ rotPer, orbPer, orbRad, mooSiz, plaSiz, setRotOrbPer, setOrbRad, setBodySize }) => {
  const [form, setForm] = useState({
    rotationalPeriod: rotPer,
    orbitalPeriod: orbPer,
    orbitRadius: orbRad,
    moonSize: mooSiz,
    planetSize: plaSiz
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
      e.preventDefault();
    },
    [setRotOrbPer,setOrbRad,setBodySize, form]
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
        <button type="submit">SET</button>
      </form>
    </div>
  );
};

export default Interface;
