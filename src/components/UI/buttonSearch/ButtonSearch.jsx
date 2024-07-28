import React from 'react';
import classes from "./ButtonSearch.module.css";

const ButtonSearch = () => {
    return (
        <div className={classes.wrapper}>
            <button className={classes.btn}>
                <p className={classes.pTag}>🔎</p>
            </button>
        </div>
    );
};

export default ButtonSearch;