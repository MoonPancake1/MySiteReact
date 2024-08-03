import React from 'react';
import classes from "./LoginBtn.module.css";

const LoginBtn = () => {

    function redirect() {
        console.log("Redirecting to login...");
    }

    return (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <button
            className={classes.buttonAuth}
            role="button"
            onClick={redirect}>
            <img src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f511.png" alt=""
            className={classes.stikerAuth}/> Войти
        </button>
)
    ;
};

export default LoginBtn;