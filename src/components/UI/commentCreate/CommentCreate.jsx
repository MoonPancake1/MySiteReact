import React, {useState} from 'react';
import classes from './CommentCreate.module.css';
import AvatarPrev from "../avatarPrev/AvatarPrev";
import testAvatar from "../../../images/avatar.png";
import CommentInput from "../commentInput/CommentInput";
import SubmitSendBtn from "../submitSendBtn/SubmitSendBtn";
import {useFetching} from "../../hooks/useFetching";
import ProjectService from "../../../Api/ProjectService";

const CommentCreate = (props) => {

    const [comment, setComment] = useState('');

    const [fetchCreateComment, createCommentLoading, createCommentError] = useFetching(
        async () => {
            await ProjectService.createComment(props.auth.user.access_token,
                props.project_id, comment);
    })

    return (
        <div className={classes.container}>
            <div className={classes.wrapperAvatarPrev}>
                <AvatarPrev imgLink={testAvatar} borderSize={"2px"}
                            borderRadius={"10px"}/>
            </div>
            <div className={classes.wrapperInputBox}>
                <CommentInput placeholder={"Напиши свой комментарий..."}
                            borderSize={"2px"} borderRadius={"10px"}
                            setComment={setComment}
                />
            </div>
            <div className={classes.wrapperSendBtn}>
                <SubmitSendBtn borderSize={"2px"} borderRadius={"10px"}
                check={comment} onClick={fetchCreateComment}/>
            </div>
        </div>
    );
};

export default CommentCreate;