import React, { useContext } from "react";
import WeatherHook from "../context/Weather";
import css from "./cityname.module.css";

const CityName = () => {
    const weatherCtx = useContext(WeatherHook);
    return (
        <h1 className={css.h1}>
            {weatherCtx.weatherData ? weatherCtx.weatherData?.name : "No name"}
        </h1>
    );
};

export default CityName;
