import React, { useContext, useEffect, useState } from "react";
import BackgroundImage from "./components/BackgroundImage";
import css from "./Container.module.css";
import Logo from "./components/Logo";
import Information from "./components/Information";
import Sidebar from "./components/Sidebar";
import WeatherHook from "./context/Weather";
import ViewHook from "./context/ViewHook";
import Mobile from "./components/Mobile";
function App() {
    const weatherCtx = useContext(WeatherHook);

    // console.log(weatherCtx);
    const { width } = ViewHook();

    let content = (
        <div className={css.wrapper}>
            <h2>Something wrong to me</h2>
        </div>
    );

    useEffect(() => {
        console.log("new width", width);
        if (width < 2000) {
            content = (
                <div className={css.wrapper}>
                    <div className={css.subwrapper}>
                        <Logo />
                        <Information />
                    </div>
                    <div className={css.secondsubwrapper}>
                        <Sidebar />
                    </div>
                </div>
            );
        } else if (width < 768) {
            content = (
                <div className={css.wrapper}>
                    <div className={css.subwrapper}>
                        <Logo />
                        <Information />
                    </div>
                </div>
            );
        } else if (width < 375) {
            content = (
                <div className={css.mobilewrapper}>
                    {/* <div className={css.mobilelogo}>
                        <Logo />
                    </div>
                    <div>
                        <Information />
                    </div>
                    <div>
                        <Sidebar />
                    </div> */}
                    <h1>HI</h1>
                </div>
            );
        }
    }, [width]);

    return (
        <div className={css.container}>
            <BackgroundImage />
            {weatherCtx.errorHandler && <h1>Something went wrong</h1>}
            {width < 375 && <Mobile />}
            {width < 768 && width > 375 && <Mobile />}
            {width > 769 && (
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
            )}
        </div>
    );
}

export default App;
