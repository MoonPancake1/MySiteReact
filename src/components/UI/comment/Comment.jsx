import React, {useEffect, useState} from 'react';
import classes from "./Comment.module.css";
import AvatarPrev from "../avatarPrev/AvatarPrev";
import testAvatar from "../../../images/avatar.png";
import utils from "../../../utils/utils";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../../Api/UserService";
import Loader from "../loader/Loader";

const Comment = (props) => {

    const [commentUser, setCommentUser] = useState([]);

    const [fetchGetUserInfo, getUserInfoLoading, getUserInfoError] = useFetching(
        async () => {
            const commentUser = await UserService.getUserInfoByUUID(props.comment.user_uuid);
            setCommentUser(commentUser);
    })

    useEffect(() => {
        fetchGetUserInfo()
    }, []);

    return (
        <div className={classes.container}>
            {getUserInfoLoading
                ? <Loader/>
                : <>
                    <div className={classes.wrapperAvatarPrev}>
                        <AvatarPrev imgLink={testAvatar} borderSize={"2px"}
                                    borderRadius={"10px"} colorThief={props.colorThief}/>
                    </div>
                    <div className={classes.wrapperCommentText}>
                        <div className={classes.wrapperCommentCreateInfo}>
                            <p className={classes.CommentCreateInfo}>
                                {utils.getFormattedCommentInfo(commentUser.nickname, props.comment.created_at)}
                            </p>
                        </div>
                        <div className={classes.containerCommentText}>
                            <pre className={classes.userComment}>
                                {props.comment.comment}
                            </pre>
                        </div>
                    </div>
                    <div className={classes.wrapperPixelPerfect}>

                    </div>
                </>
            }
        </div>
    );
};

export default Comment;