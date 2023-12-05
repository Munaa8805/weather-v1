import React from "react";
import logo from "../assets/logo.svg";
import css from "./logo.module.css";

const Logo = (props) => {
    return <img src={logo} alt="logo" className={css.logoContainer} />;
};

export default Logo;
