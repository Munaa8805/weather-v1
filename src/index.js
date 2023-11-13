import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeatherHook } from "./context/Weather";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <WeatherHook>
        <App />
    </WeatherHook>
);

