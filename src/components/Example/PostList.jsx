import React from 'react';
import Post from "./Post";

const PostList = ({post, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
              </h1>
              {post.map((post, index) =>
                    <Post remove={remove} number={index} post={post} key={post.id}/>
              )}
        </div>
    );
};

export default PostList;