import React, { useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const Interface = ({
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
        <Paper className="uiBox">
            <form onSubmit={onSubmit}>
                <TextField
                    id="rotationalPeriod"
                    name="rotationalPeriod"
                    label="Rotational Period"
                    type="number"
                    variant="outlined"
                    hintText="the time it takes for the moon to complete a rotation on its own axis"
                    floatingLabelText="Rotational Period"
                    onChange={changeInputValue}
                    defaultValue={form.rotationalPeriod}
                    color="inherit"
                />
                <TextField
                    id="orbitalPeriod"
                    name="orbitalPeriod"
                    label="Orbital Period"
                    type="number"
                    variant="outlined"
                    hintText="the time it takes for the moon to complete a revolution around the bigger body"
                    floatingLabelText="Orbital Period"
                    onChange={changeInputValue}
                    defaultValue={form.orbitalPeriod}
                    color="inherit"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    color="secondary"
                >
                    SET
                </Button>
            </form>
        </Paper>
    );
};

export default Interface;
