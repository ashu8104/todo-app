
import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    
    render(){
        return(
                <nav className="App-header">
                    <div className="container">
                        <Link to="/dashboard" className="brand-logo">To do App</Link>
                        <Link to="/status" className ="App-link">Status</Link>
                    </div>
                </nav>  
        );
    }
}