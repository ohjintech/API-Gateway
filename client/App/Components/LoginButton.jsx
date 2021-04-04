import React, { Component } from 'react';


//  // react hooks
//  const [ details, setDetails ] = useState({});
//  const [ isFetching, setIsFetching ] = useState(true);

// onclick event lister:
// when a user logs in, 
// a query is made to the /login backend endpoint
// popup notification
// ribbon or user input fields disappears
const LoginButton = (props) => (
  
  <button className="login" onClick={() => props.loginFunc() }><i className="fas fa-sign-in-alt"></i>
      Login Button
  </button>

);

export default LoginButton;