import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import axios from "axios"
import Projects from "./components/Projects"
import  Actions from "./components/Actions"
import Home from "./components/Home"
import Post from "./components/Post"
import Form from "./components/Form"
class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      actions: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/projects')
    .then(res => {
      this.setState({projects: res.data})
    })
    .catch(err => {
      console.log('ERROR', err)
    })
    axios.get('http://localhost:9000/api/actions')
    .then(res => {
      this.setState({actions: res.data})
    })
    .catch(err => {
      console.log('ERROR', err)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route path='/' component={Home} />
          <Route  path='/form' component={Form} />
          <Route path='/projects' render={props => <Projects {...props} projects={this.state.projects}/>} />
          <Route  path="/actions/:id" render={props => <Post {...props} actions={this.state.actions}/> }/>
          <Route exact path='/actions' render={props => <Actions {...props} actions={this.state.actions}/>} />
        
        </header>
        <div>
       
        </div>
      </div>
    );
  }
}

export default App;
