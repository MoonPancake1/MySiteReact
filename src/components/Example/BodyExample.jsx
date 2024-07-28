import React, {useState} from 'react';
import PostForms from "./PostForms";
import PostList from "./PostList";

const BodyExample = () => {

    const [posts, setPosts] = useState(
        [
            {id: 1, title: "JavaScript", description: "JavaScript – Язык программирования"},
            {id: 2, title: "Python", description: "Python – Язык программирования"},
            {id: 3, title: "C++", description: "C++ – Язык программирования"},
            {id: 4, title: "C#", description: "C# – Язык программирования"}
        ]
    );

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    return (
        <div className="container">
            <PostForms create={createPost}/>
            {posts.length !== 0
                ? <PostList remove={removePost} post={posts} title={"Список постов 1"}/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены!</h1>
            }

        </div>
    );
};

export default BodyExample;