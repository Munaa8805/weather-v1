import React, { useContext } from "react";
import css from "./detailinfo.module.css";
import WeatherHook from "../context/Weather";
import WeatherDetail from "./WeatherDetail";
const DetailInfo = () => {
    const weatherCtx = useContext(WeatherHook);
    let newData = [];

    for (const data in weatherCtx.weatherData.main) {
        // console.log(weatherCtx.weatherData.main[data]);
        newData.push({
            label: data,
            value: weatherCtx.weatherData.main[data],
        });
    }
    console.log(newData);
    return (
        <div className={css.container}>
            <p>THUNDERSTORM WITH LIGHT DRIZZLE</p>
            <div className={css.wrapper}>
                {newData.length > 0 &&
                    newData.map((data) => (
                        <WeatherDetail key={data.label} data={data} />
                    ))}
            </div>
        </div>
    );
};

export default DetailInfo;
