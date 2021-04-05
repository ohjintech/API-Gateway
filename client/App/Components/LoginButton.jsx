import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//  // react hooks
//  const [ details, setDetails ] = useState({});
//  const [ isFetching, setIsFetching ] = useState(true);

// onclick event lister:
// when a user logs in, 
// a query is made to the /login backend endpoint
// popup notification
// ribbon or user input fields disappears
const LoginButton = (props) => (

  <button className="login">
    <Link to='login'>
      <i className="fas fa-sign-in-alt" >Login Button</i>
    </Link>
  </button>
  
);

export default LoginButton;