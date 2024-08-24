import React from 'react';
import classes from './CommentCreate.module.css';
import AvatarPrev from "../avatarPrev/AvatarPrev";
import testAvatar from "../../../images/avatar.png";
import CommentInput from "../commentInput/CommentInput";
import SubmitSendBtn from "../submitSendBtn/SubmitSendBtn";

const CommentCreate = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.wrapperAvatarPrev}>
                <AvatarPrev imgLink={testAvatar} borderSize={"2px"}
                            borderRadius={"10px"} colorThief={props.colorThief}/>
            </div>
            <div className={classes.wrapperInputBox}>
                <CommentInput placeholder={"Напиши свой комментарий..."}
                            borderSize={"2px"} borderRadius={"10px"}
                            setComment={props.setComment}
                />
            </div>
            <div className={classes.wrapperSendBtn}>
                <SubmitSendBtn borderSize={"2px"} borderRadius={"10px"}
                check={props.comment} onClick={props.fetchCreateComment}/>
            </div>
        </div>
    );
};

export default CommentCreate;