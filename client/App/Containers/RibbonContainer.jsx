import React from 'react'
import SignupButton from '../Components/SignupButton.jsx'
import LoginButton from '../Components/LoginButton.jsx'
import { Link } from 'react-router-dom'

class RibbonContainer extends React.Component{
  constructor(props){
    super(props)

    this.doLogin = this.doLogin.bind(this)
  }

  doLogin(e) {
    fetch('/login')
    .then(res => res.json())
    .then((data) => {

    })
  }
  
  render(){
      return(
          <div className='ribboncontainer'>
          <h1>username</h1>
            <input className="usertext" type="text" />
          <h2>password</h2>
          <input className="classtext"type="text" />

         
          <SignupButton/>
<<<<<<< HEAD
          <LoginButton loginFunc={this.doLogin}/>
=======
    


          <LoginButton/>
  
          
>>>>>>> 4794007a88f914aeec5d05785545ad6dc2ffbe04
          </div>
      )
  }
}

export default RibbonContainer