import React from "react";
import backgroundImage from "../assets/bg-weather.svg";
import css from "./backgrounimage.module.css";

const BackgroundImage = () => {
    return (
        <img
            src={backgroundImage}
            alt="background image"
            className={css.background}
        />
    );
};

export default BackgroundImage;
