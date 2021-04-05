import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//  // react hooks
//  const [ details, setDetails ] = useState({});
//  const [ isFetching, setIsFetching ] = useState(true);

const LoginButton = (props) => (

  <button className="login">
    <Link to='login'>
      <i className="fas fa-sign-in-alt" >Login Button</i>
    </Link>
  </button>
  
);

export default LoginButton;