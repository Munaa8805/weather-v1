import React from "react";
import css from "./desktop.module.css";
import Logo from "./Logo";
import Information from "./Information";
import Sidebar from "./Sidebar";

const Desktop = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.subwrapper}>
                <div className={css.desktoplogo}>
                    <Logo />
                </div>
                <Information />
            </div>
            <div className={css.secondsubwrapper}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Desktop;
