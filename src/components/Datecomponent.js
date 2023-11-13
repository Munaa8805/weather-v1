import React, { useContext, useState } from "react";
import css from "./datecomponent.module.css";
import WeatherHook from "../context/Weather";

const Datecomponent = () => {
    const [newDate, setNewDate] = useState();
    const weatherCtx = useContext(WeatherHook);
    let date = new Date();

    setTimeout(() => {
        date = date.toString().split("GMT")[0];
        setNewDate(date);
    }, 1000);

    return (
        <div className={css.container}>
            <p>{newDate}</p>
        </div>
    );
};

export default Datecomponent;
