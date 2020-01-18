import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PIEChart from "./components/PIEChart";
import "./App.css";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="">
              <Navbar/>
              <Switch>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path ="/status" component ={PIEChart} />
              <Redirect from="/" to="dashboard" />
              </Switch>
            </div>
       </BrowserRouter>
      
    );
  }
}

export default App;