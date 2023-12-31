import React, { useState, useEffect } from "react";

const Ctx = React.createContext();

export const WeatherHook = (props) => {
    const [weatherData, setWeatherData] = useState({});
    const [errorHandler, setErrorHandler] = useState(false);
    const [searchValue, setSearchValue] = useState("vancouver");

    let apiKey = "62ffc07c59bd90b05a95e71d3c329f08";
    useEffect(() => {
        // console.log("first fetch");

        const abortController = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${apiKey}`,
                    {
                        signal: abortController.signal,
                    }
                );
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                const result = await response.json();
                console.log(result);
                setWeatherData(result);
            } catch (error) {
                console.log(error);
                setErrorHandler(true);
            }
        };

        fetchData();
        return () => {
            abortController.abort();
        };
    }, [searchValue]);

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
