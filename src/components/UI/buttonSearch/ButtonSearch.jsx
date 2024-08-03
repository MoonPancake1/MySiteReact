import React from 'react';
import classes from "./ButtonSearch.module.css";

const ButtonSearch = () => {
    return (
        <div className={classes.wrapper}>
            <button className={classes.btn}>
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f50d.png" alt=""
                className={classes.pTag}/>
            </button>
        </div>
    );
};

export default ButtonSearch;