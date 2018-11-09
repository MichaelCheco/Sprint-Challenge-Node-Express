import React, { Component } from 'react';
import axios from "axios"
import "../App.css"
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_id: '' ,
      description: '', 
      notes: ''
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
    this.setState({project_id: '', description: '', notes: ''})

  }
  render() {
    return <form>
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
    <button type="submit" onClick={this.handleSubmit}>Add</button>
    </form>;
  }
}

export default Form;