import React, {useContext, useEffect, useState} from 'react';
import classes from './CommentsBlock.module.css';
import CommentCreate from "../commentCreate/CommentCreate";
import {AuthContext} from "../../../context";
import {useFetching} from "../../hooks/useFetching";
import ProjectService from "../../../Api/ProjectService";
import Loader from "../loader/Loader";
import CommentsList from "../../Body/Projects/commentsList/CommentsList";
import ColorThief from "colorthief";

const CommentsBlock = (props) => {

    const auth = useContext(AuthContext);

    const colorThief = new ColorThief();

    const [createComment, setCreateComment] = useState('');

    const [fetchCreateComment, createCommentLoading, createCommentError] = useFetching(
        async () => {
            await ProjectService.createComment(props.auth.user.access_token,
                props.project_id, createComment);
    })

    const [comments, setComments] = useState([]);

    const [fetchGetComments, getCommentsLoading, getCommentsError] = useFetching(
        async () => {
            const comments = await ProjectService.getCommentsForProject(props.project_id);
            setComments(comments);
    })

    useEffect(() => {
        fetchGetComments();
    }, [createCommentLoading]); // TODO: переделать добавление новых комментариев (добавить анимацию)

    return (
        <div className={classes.container}>
            <div className={classes.wrapperTextTitle}>
                <h1 className={classes.textTitle}>
                    Комментарии
                </h1>
            </div>
            <div className={classes.containerCommentBlock}>
                <div className={classes.containerCommentCreate}>
                    {auth.isAuthenticated
                        ?   <CommentCreate auth={auth} project_id={props.project_id}
                        fetchCreateComment={fetchCreateComment} comment={createComment}
                        setComment={setCreateComment} colorThief={colorThief}/>
                        :   <h1 className={classes.textErrorAuthForCreateComment}>
                                Для написания комментариев необходимо авторизоваться!
                            </h1>
                    }
                </div>
                <div className={classes.containerCommentList}>
                    {getCommentsLoading
                        ?   <Loader />
                        :   <>
                            {comments.length > 0
                                ?   <CommentsList colorThief={colorThief} comments={comments}/>
                                :   <h1>
                                    Комментариев нет, будь первым!
                                    </h1>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CommentsBlock;