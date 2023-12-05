import React, { useEffect } from "react";
import backgroundImage from "../assets/bg-weather.svg";
import css from "./backgrounimage.module.css";
import tabletImage from "../assets/bg-tablet.svg";
import mobileImage from "../assets/bg-mobile.svg";
import ViewHook from "../context/ViewHook";

const BackgroundImage = () => {
    let image = backgroundImage;
    let newSize = ViewHook();
    if (newSize.width < 767) {
        image = mobileImage;
    } else if (newSize.width < 1023) {
        image = tabletImage;
    }

    return (
        <img src={image} alt="background image" className={css.background} />
    );
};

export default BackgroundImage;
