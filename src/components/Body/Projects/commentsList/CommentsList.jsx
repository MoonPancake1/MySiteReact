import React, {useState} from 'react';
import classes from './CommentsList.module.css';
import Comment from "../../../UI/comment/Comment";
import {useFetching} from "../../../hooks/useFetching";
import ProjectService from "../../../../Api/ProjectService";

const CommentsList = (props) => {

    return (
        <div className={classes.container}>
            {props.comments.map((comment, index) => (
                <Comment colorThief={props.colorThief} comment={comment} key={index} />
            ))}
        </div>
    );
};

export default CommentsList;