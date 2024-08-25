import React, {useContext, useEffect, useState} from 'react';
import classes from "./Comment.module.css";
import AvatarPrev from "../avatarPrev/AvatarPrev";
import utils from "../../../utils/utils";
import {useFetching} from "../../hooks/useFetching";
import UserService from "../../../Api/UserService";
import Loader from "../loader/Loader";
import {AuthContext} from "../../../context";

const Comment = (props) => {

    const auth = useContext(AuthContext);

    const [commentUser, setCommentUser] = useState([]);

    // eslint-disable-next-line no-unused-vars
    const [fetchGetUserInfo, getUserInfoLoading, getUserInfoError] = useFetching(
        async () => {
            const commentUser = await UserService.getUserInfoByUUID(props.comment.user_uuid);
            setCommentUser(commentUser);
    })

    // TODO: доделать кнопки "Изменить" и "Удалить"
    function checkOwnerComment(user_uuid) {
        if (auth.isAuthenticated){
            if (auth.user.uuid === user_uuid) {
                return true;
            }
        }
        return false;
    }

    useEffect(() => {
        // eslint-disable-next-line
        fetchGetUserInfo()
        // eslint-disable-next-line
    }, []);

    return (
        <div className={classes.container}>
            {getUserInfoLoading
                ? <Loader/>
                : <>
                    <div className={classes.wrapperAvatarPrev}>
                        <AvatarPrev imgLink={commentUser.avatar} borderSize={"2px"}
                                    borderRadius={"10px"} colorThief={props.colorThief}/>
                    </div>
                    <div className={classes.wrapperCommentText}>
                        <div className={classes.wrapperCommentCreateInfo}>
                            <p className={classes.CommentCreateInfo}>
                                {checkOwnerComment(commentUser.user_uuid)
                                    ?   <>
                                            {utils.getFormattedCommentInfo("Твой", props.comment.created_at)}
                                        </>
                                    :   <>
                                            {utils.getFormattedCommentInfo(commentUser.nickname, props.comment.created_at)}
                                        </>
                                }
                            </p>
                        </div>
                        <div className={classes.containerCommentText}>
                            <pre className={classes.userComment}>
                                {props.comment.comment}
                            </pre>
                        </div>
                        {checkOwnerComment(commentUser.user_uuid)
                            ?   <div className={classes.wrapperButtonsEditComment}>
                                    <button className={classes.btnEdit}>
                                        Изменить
                                    </button>
                                    <button className={classes.btnDelete}>
                                        Удалить
                                    </button>
                                </div>
                            : <></>
                        }
                    </div>
                    <div className={classes.wrapperPixelPerfect}>

                    </div>
                </>
            }
        </div>
    );
};

export default Comment;