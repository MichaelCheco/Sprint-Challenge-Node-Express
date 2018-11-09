import React, { Component, Fragment } from 'react';
import axios from "axios"
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            description: '',
            project_id: ''
         }
    }
    editPost = id => {
        axios
          .put(`http://localhost:9000/api/actions/${id}`, {description: this.state.description, project_id: this.state.project_id})
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
        this.setState();
      };
      handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }

    render() { 
        if (this.props.actions.length < 1) {
            return <h1>WAIT!!!!</h1>;
          }
        const Post = this.props.actions.find(
            post => `${post.id}` === this.props.match.params.id
        )
        console.log(Post, 'post')
        return ( 
            <Fragment>
            <div className="post">
            <h2>{Post.description}</h2>
            <h2>{Post.project_id}</h2>
            <button onClick={() => this.props.delete(Post.id)}>Delete</button>
        </div>
        <div>
        <input type="text" value={this.state.description} onChange={this.handleChange} name="description"/>  
            <input type="text" value={this.state.project_id} onChange={this.handleChange} name="project_id"/> 
            <button onClick={() => this.editPost(Post.id)}>Edit</button> 
        </div>
        </Fragment>
         );
    }
}
 
export default Post;
 