import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from './App/Pages/MainPage.jsx';
import LoginPage from './App/Pages/LoginPage.jsx';
import SignupPage from './App/Pages/SignupPage.jsx';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
           <Router>
              <Route path='/' exact component={MainPage}/> 
              <Route path='/login' exact component={LoginPage}/> 
              <Route path='/signup' exact component={SignupPage}/>
            </Router>   
        )
    }
}
// eslint-disable-next-line linebreak-style

ReactDOM.render((<App/>), document.getElementById('root'))