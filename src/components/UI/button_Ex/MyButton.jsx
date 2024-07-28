import React from 'react';
import classes from "./MyButton.module.css";

const Button1 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default Button1;