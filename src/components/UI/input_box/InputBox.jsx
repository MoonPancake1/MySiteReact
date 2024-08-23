import React from 'react';
import classes from './InputBox.module.scss';

const InputBox = (props) => {

    return (
        <div className={classes.inputGroup}>
            <input type="text" placeholder="&nbsp;"
                   className={classes.inputGroup__input}
                   autoComplete={"off"}
                   required={true}
                   name={props.name}
                   id={props.name}
                   onChange={props.onChange}
                   list={props.list}
            />
            <label className={classes.inputGroup__label}
                   htmlFor={props.name}><img src={props.img} alt="" className={classes.imgStick}/>{props.placeholder}</label>
        </div>
    );
};

export default InputBox;