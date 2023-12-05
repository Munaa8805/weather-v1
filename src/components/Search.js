import React, { useContext, useState } from "react";
import css from "./search.module.css";
import WeatherHook from "../context/Weather";
import searchIcon from "../assets/searchicon.svg";
const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const weatherCtx = useContext(WeatherHook);

    const submitHandler = (event) => {
        event.preventDefault();
        weatherCtx.setSearchValue(event.target.search.value);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className={css.container}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search location ..."
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                />
                <img src={searchIcon} alt="search icon" />
            </div>
        </form>
    );
};

export default Search;
