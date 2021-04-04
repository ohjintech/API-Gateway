import React from 'react'
import SignupButton from '../Components/SignupButton.jsx'
import LoginButton from '../Components/LoginButton.jsx'

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
          <LoginButton loginFunc={this.doLogin}/>
          </div>
      )
  }
}

export default RibbonContainer