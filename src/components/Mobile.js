import React from "react";
import css from "./mobile.module.css";
import Logo from "./Logo";
import Search from "./Search";
import Information from "./Information";
import Sidebar from "./Sidebar";

const Mobile = () => {
    return (
        <div className={css.mobilecontainer}>
            <div className={css.mobileheader}>
                <div className={css.mobilelogo}>
                    <Logo />
                </div>
                <div className={css.searchwrapper}>
                    <Search />
                </div>
            </div>
            <div className={css.informationwrapper}>
                <Information />
            </div>
            <div className={css.sidewrapper}>
                <Sidebar />
            </div>
        </div>
    );
};

export default Mobile;
