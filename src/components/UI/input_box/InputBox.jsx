import React from 'react';
import classes from './InputBox.module.scss';

const InputBox = (props) => {
    return (
        <div className={classes.inputGroup}>
            <input type="text" placeholder="&nbsp;"
                   className={classes.inputGroup__input}
                   name={props.name}
                   id={props.name}
                   autoComplete={"off"}
                   required={true}
            />
            <label className={classes.inputGroup__label}
                   htmlFor={props.name}>{props.placeholder}</label>
        </div>
    );
};

export default InputBox;