import React from 'react';

const Post = props => {
    if (props.actions.length < 1) {
        return <h1>WAIT!!!!</h1>;
      }
    const Post = props.actions.find(
        post => `${post.id}` === props.match.params.id
    )
    
        console.log(Post, 'post')
        return (  <div className="post">
            <h2>{Post.description}</h2>
            <h2>{Post.project_id}</h2>
            <button onClick={() => props.delete(Post.id)}>Delete</button>
        </div>
     );
}
 
export default Post;