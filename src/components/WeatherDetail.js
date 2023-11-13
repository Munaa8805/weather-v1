import React from "react";
import css from "./weatherdetail.module.css";
import tempmaxicon from "../assets/tempmax.svg";
import tempminicon from "../assets/tempmin.svg";
import humidicon from "../assets/humid.svg";
import cloudicon from "../assets/cloud.svg";
import windicon from "../assets/wind.svg";

const WeatherDetail = ({ data }) => {
    const mainData = [
        { label: "Temp max", icon: tempmaxicon },
        { label: "Temp min", icon: tempminicon },
        { label: "Humidity", icon: humidicon },
        { label: "Cloudy", icon: cloudicon },
        { label: "Wind", icon: windicon },
    ];

    let content;

    switch (data.label) {
        case "temp_max":
            content = (
                <div className={css.container}>
                    <span>{mainData[0].label}</span>{" "}
                    <div className={css.wrapper}>
                        <p>{Math.round(data.value)}C</p>
                        <img src={mainData[0].icon} />
                    </div>
                </div>
            );
            break;
        case "temp_min":
            content = (
                <div className={css.container}>
                    <span>{mainData[1].label}</span>{" "}
                    <div className={css.wrapper}>
                        <p>{Math.round(data.value)}C</p>
                        <img src={mainData[1].icon} />
                    </div>
                </div>
            );
            break;
        case "humidity":
            content = (
                <div className={css.container}>
                    <span>{mainData[2].label}</span>{" "}
                    <div className={css.wrapper}>
                        <p>{Math.round(data.value)}%</p>
                        <img src={mainData[2].icon} />
                    </div>
                </div>
            );
            break;
        case "clouds":
            content = (
                <div className={css.container}>
                    <span>{mainData[3].label}</span>{" "}
                    <div className={css.wrapper}>
                        <p>{Math.round(data.value)}C</p>
                        <img src={mainData[3].icon} />
                    </div>
                </div>
            );
            break;
        case "feels_like":
            content = (
                <div className={css.container}>
                    <span>{mainData[4].label}</span>{" "}
                    <div className={css.wrapper}>
                        <p>{Math.round(data.value)}km/h</p>
                        <img src={mainData[4].icon} />
                    </div>
                </div>
            );
            break;
    }

    return content;
};

export default WeatherDetail;
