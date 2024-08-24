import React, {useState} from 'react';
import classes from './CommentInput.module.css';

const CommentInput = (props) => {

    return (
        <div className={classes.container} style={{borderRadius: props.borderRadius,
            border: `${props.borderSize} solid black`}}>
            <textarea className={classes.inputBox}
            placeholder={props.placeholder} onChange={
                (e) => {
                    props.setComment(e.target.value)
                    e.target.style.height = 'auto';
                    const correctHeight = e.target.scrollHeight
                    e.target.style.height = `${correctHeight}px`;
                }
            }/>
        </div>
    );
};

export default CommentInput;