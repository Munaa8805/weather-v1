import React, { useContext } from "react";
import css from "./information.module.css";
import CityName from "./CityName";
import Datecomponent from "./Datecomponent";
import WeatherHook from "../context/Weather";
const Information = () => {
    const WeatherCtx = useContext(WeatherHook);
    // console.log("WeatherCtx", WeatherCtx);
    let url =
        WeatherCtx.weatherData?.weather?.length > 0
            ? `https://openweathermap.org/img/wn/${WeatherCtx.weatherData?.weather[0]?.icon}@2x.png`
            : "https://openweathermap.org/img/wn/01d.png";

    return (
        <div className={css.container}>
            <h1>
                {WeatherCtx.weatherData
                    ? Math.ceil(WeatherCtx.weatherData?.main?.temp)
                    : "0"}
                °
            </h1>
            <div className={css.subcontainer}>
                <CityName />
                <Datecomponent />
            </div>
            <img src={url} alt="weather icon" />
        </div>
    );
};

export default Information;
