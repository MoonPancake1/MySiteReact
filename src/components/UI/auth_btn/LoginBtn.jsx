import React from 'react';
import classes from "./LoginBtn.module.css";
import {Link} from "react-router-dom";

const LoginBtn = () => {

    function redirect() {
        console.log("Redirecting to login...");
    }

    return (
        <Link to={"/login"}>
            <button
                className={classes.buttonAuth}
                role="button"
                onClick={redirect}>
                <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f511.png" alt=""
                className={classes.stikerAuth}/> Войти
            </button>
        </Link>    
)
    ;
};

export default LoginBtn;