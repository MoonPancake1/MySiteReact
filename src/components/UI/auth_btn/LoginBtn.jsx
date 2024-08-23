import React from 'react';
import classes from "./LoginBtn.module.css";
import {Link} from "react-router-dom";

const LoginBtn = () => {

    return (
        <Link to={"/login"}>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <button
                className={classes.buttonAuth}
                role="button">
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f511.png" alt=""
                className={classes.stikerAuth}/> Войти
            </button>
        </Link>    
)
    ;
};

export default LoginBtn;