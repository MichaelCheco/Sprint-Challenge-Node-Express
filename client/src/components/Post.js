import React from 'react';

const Post = props => {
    if (props.actions.length < 1) {
        return <h1>WAIT!!!!</h1>;
      }
    const Post = props.actions.find(
        post => `${post.id}` === props.match.params.id
    )
    return (
        <div>
            <h2>{Post.description}</h2>
        </div>
     );
}
 
export default Post;