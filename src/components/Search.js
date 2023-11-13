import React, { useContext } from "react";
import css from "./search.module.css";
import WeatherHook from "../context/Weather";
import searchIcon from "../assets/searchicon.svg";
const Search = () => {
    const weatherCtx = useContext(WeatherHook);
    return (
        <form>
            <div className={css.container}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Location"
                />
                <img src={searchIcon} alt="search icon" />
            </div>
        </form>
    );
};

export default Search;
