import React from 'react'

class LoginPage extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
      return(
        <div className='loginpage'>
        <div className='loginbox'>
                <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
                <input type='text' name='username' placeholder='Enter your username here' className='form'/>
                <input type='password' name='password' placeholder='Enter your password here' className='form'/>
        </div>
      </div>
      )
  }
}

export default LoginPage