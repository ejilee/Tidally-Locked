import React, { useState, useCallback } from "react";
import "./Interface.scss";

const Interface = ({ rotPer, orbPer, settingRotOrbPer }) => {
  const [form, setForm] = useState({
    rotPer: rotPer,
    orbPer: orbPer
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
      settingRotOrbPer(form);
      e.preventDefault();
    },
    [settingRotOrbPer, form]
  );

  return (
    <div className="uiBox">
      <form onSubmit={onSubmit}>
        Rotational period :<br />
        <input
          type="number"
          name="rotPer"
          value={form.rotPer}
          onChange={changeInputValue}
        />
        <br />
        <br />
        Orbital period :<br />
        <input
          type="number"
          name="orbPer"
          value={form.orbPer}
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
