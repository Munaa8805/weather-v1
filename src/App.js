import React, { useContext } from "react";
import BackgroundImage from "./components/BackgroundImage";
import css from "./Container.module.css";
import Logo from "./components/Logo";
import Information from "./components/Information";
import Sidebar from "./components/Sidebar";
import WeatherHook from "./context/Weather";
function App() {
    const weatherCtx = useContext(WeatherHook);
    console.log(weatherCtx);

    return (
        <div className={css.container}>
            <BackgroundImage />
            {weatherCtx.errorHandler ? (
                <h1>Something went wrong</h1>
            ) : (
                <div className={css.wrapper}>
                    <div className={css.subwrapper}>
                        <Logo />
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
