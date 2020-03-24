import React from 'react'
import './sign-in.styles.scss' 

import { Link } from 'react-router-dom'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignInPage extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName : '',
      password : ''
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
    const { userName, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">Alreay have an account.</h2>
        <span className="subtitle">Sign in with username and password.</span>
        <form className='sign-in-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='userName'
            value={userName}
            required
            label='Username'
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
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
        <h3 className='sign-up-dialogue'>Don't have an account.<Link to='sign-up'> Create One</Link ></h3>
      </div>
    )
  }
}

export default SignInPage;