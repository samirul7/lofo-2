import React from 'react'
import './sign-up.styles.scss' 

import { Link } from 'react-router-dom'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName : '',
      email : '',
      password : '',
      confirmPassword : ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // backend job to verify the user
  }
  
  render(){
    const { userName,email, password, confirmPassword } = this.state;
    console.log(userName,email,password)
    return (
      <div className="sign-up">
        <h2 className="title">I did't have an account.</h2>
        <span className="subtitle">Sign up with username ,email and password.</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='userName'
            value={userName}
            required
            label='Username'
            handleChange={this.handleChange}
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            required
            label='Email'
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            required
            label='Confirm Password'
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
        <h3 className='sign-in-dialogue'>Alreay a user.<Link to='sign-in'> Sign In</Link ></h3>
      </div>
    )
  }
}

export default SignUpPage;