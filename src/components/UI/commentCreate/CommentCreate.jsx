import React, {useContext} from 'react';
import classes from './CommentCreate.module.css';
import AvatarPrev from "../avatarPrev/AvatarPrev";
import CommentInput from "../commentInput/CommentInput";
import SubmitSendBtn from "../submitSendBtn/SubmitSendBtn";
import {AuthContext} from "../../../context";

const CommentCreate = (props) => {

    const auth = useContext(AuthContext)

    return (
        <div className={classes.container}>
            <div className={classes.wrapperAvatarPrev}>
                <AvatarPrev imgLink={auth.user.avatar} borderSize={"2px"}
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