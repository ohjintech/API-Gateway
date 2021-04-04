import React from 'react'

class SignupPage extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
      return(
          <div className='signuppage'>
            <div className='signupbox'>
                <img className='wunderpuss' src='https://upload.wikimedia.org/wikipedia/commons/7/73/Komodo5_28-12-11_-_47a_alert_%286695807463%29.jpg'/>
                <input type='text' name='username' placeholder='Enter new username here' className='form'/>
                <input type='password' name='password' placeholder='Enter new password here' className='form'/>
            </div>
          </div>
      )
  }
}

export default SignupPage 