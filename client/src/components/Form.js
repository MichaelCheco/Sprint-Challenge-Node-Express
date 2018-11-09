import React, { Component } from 'react';
import axios from "axios"
import "../App.css"
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_id: '' ,
      description: '', 
      notes: '',
      completed: false
    };
  }
  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit = e => {
    const {project_id, description, notes} = this.state
    e.preventDefault();
    axios.post('http://localhost:9000/api/actions', {project_id, description, notes})
    .then(res => console.log(res)).catch(err => console.log(err))
    this.setState({project_id: '', description: '', notes: '', completed: true})
    setTimeout(() => this.setState({completed: false}), 1000)
  }
  
  render() {
    return( <div>
    <h1 className="create">Create New Post</h1>
    <form>
      
    <input 
    type="text" 
    name="project_id"
    placeholder="project_id"
    value={this.state.project_id}
    onChange={this.handleChange}
    />
    <input 
    type="text" 
    name="description"
    placeholder="description"
    value={this.state.description}
    onChange={this.handleChange}
    />
    <input 
    type="text" 
    name="notes"
    placeholder="notes"
    value={this.state.notes}
    onChange={this.handleChange}
    />
    <button type="submit" onClick={this.handleSubmit}>{this.state.completed ? 'Success' : 'Add'}</button>
    </form>;
    </div>
    )
  }
}

export default Form;
