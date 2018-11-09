import React from 'react';
import { Link } from "react-router-dom"
const Home = () => {
    return ( <div className="home-container">
        <h1>Home</h1>
        <div className="links">
          <Link to="/projects" className="link">Projects</Link>
          <Link to="/actions" className="link">Actions</Link>
          <Link to="/form" className="link">Form</Link>
          </div>
    </div>);
}
 
export default Home;