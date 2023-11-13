import React, { useState, useEffect } from "react";

const Ctx = React.createContext();

export const WeatherHook = (props) => {
    const [weatherData, setWeatherData] = useState({});
    const [errorHandler, setErrorHandler] = useState(false);
    const [searchValue, setSearchValue] = useState("Vancouver");

    let apiKey = "62ffc07c59bd90b05a95e71d3c329f08";
    useEffect(() => {
        // console.log("first fetch");
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((res) => {
                setWeatherData(res);
            })
            .catch((err) => {
                console.log(err);
                setErrorHandler(true);
            });
    }, []);

    return (
        <Ctx.Provider
            value={{
                weatherData,
                setWeatherData,
                errorHandler,
                setErrorHandler,
            }}>
            {props.children}
        </Ctx.Provider>
    );
};

export default Ctx;
