import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import Button1 from "../UI/button_Ex/MyButton";

const PostForms = ({create}) => {
    const [post, setPost] = useState({
        title: "", description: ""
    })

    function addNewPost(e) {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: "", description: ""})

    }

    return (
        <div>
            <form action="">
                <MyInput
                    type="text"
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    placeholder={"Input title"}
                    value={post.title}
                />
                <MyInput
                    type="text"
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    placeholder={"Input description"}
                    value={post.description}
                />
                <Button1 onClick={addNewPost}>Add post</Button1>
            </form>
        </div>
    );
};

export default PostForms;