import React, {useContext} from 'react';
import classes from './CommentsBlock.module.css';
import CommentCreate from "../commentCreate/CommentCreate";
import {AuthContext} from "../../../context";

const CommentsBlock = (props) => {

    const auth = useContext(AuthContext);

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
                        ?   <CommentCreate auth={auth} project_id={props.project_id}/>
                        :   <h1 className={classes.textErrorAuthForCreateComment}>
                                Для написания комментариев необходимо авторизоваться!
                            </h1>
                    }
                </div>
                <div className={classes.containerCommentList}>

                </div>
            </div>
        </div>
    );
};

export default CommentsBlock;