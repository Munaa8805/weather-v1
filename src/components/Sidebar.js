import React from "react";
import css from "./sidebar.module.css";
import Search from "./Search";
import DetailInfo from "./DetailInfo";
const Sidebar = () => {
    return (
        <div className={css.container}>
            <div className={css.detailHeader}>
                <span>Weather Details...</span>
            </div>
            <DetailInfo />
        </div>
    );
};

export default Sidebar;
