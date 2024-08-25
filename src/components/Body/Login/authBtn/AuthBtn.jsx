import React from 'react';
import classes from './AuthBtn.module.css'

const AuthBtn = (props) => {
    return (
        <button className={classes.btnAuth} onClick={() => {
            props.onClick()
        }}>
            Войти с помощью vC.ID
        </button>
    );
};

export default AuthBtn;