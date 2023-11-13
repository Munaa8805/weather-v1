import React, { useContext } from "react";
import WeatherHook from "../context/Weather";

const CityName = () => {
    const weatherCtx = useContext(WeatherHook);
    return (
        <h1
            style={{
                fontSize: "60px",
                color: "white",
                fontWeight: "700",
                margin: "0",
            }}>
            {weatherCtx.weatherData ? weatherCtx.weatherData?.name : "No name"}
        </h1>
    );
};

export default CityName;
