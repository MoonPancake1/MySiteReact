import React from 'react';
import MyButton from "../UI/button_Ex/MyButton";

const Post = (props) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number + 1}. {props.post.title}</strong>
                <div className={props.post.title}>
                    {props.post.description}
                </div>
            </div>
            <div className="post_delete">
                <MyButton
                onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default Post;