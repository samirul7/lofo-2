import React from 'react';
import './lost-aadhaar.styles.scss' 

import NormalFormInput from '../../../normal-form-input/normal-form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'
import CleaveFormInput from '../../../cleave-form-input/cleave-form-input.component'

class LostAadhaar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      aadhaarNo : '',
      name : '',
      dob : ''
    }
  }

  handleChange = event => {
    const { name, value, rawValue } = event.target;
    let actualValue;
    switch(name){
      case 'aadhaarNo' : actualValue = rawValue; break;
      case 'dob' : actualValue = rawValue; break;
      default : actualValue = value;
    }
    
    this.setState({
      [name] : actualValue
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // backend job 
  }
  
  render() {
    const { name } = this.state;
    return (
      <div className="lost">
        <h3 className="title">I have lost my aadhaar card.</h3>
        <span className="subtile">Search your aadhaar card with aadhaar number or name and date of birth.</span>
        <form onSubmit={ this.handleSubmit } className="lost-form">
          <CleaveFormInput
            options={{blocks: [4,4,4], delimiter: ' ', numericOnly: true}}
            handleChange={this.handleChange}
            name='aadhaarNo'
            id='aadhaarNo'
            label='Aadhaar No'
          />
          <h3 className="center">OR</h3>
          <NormalFormInput
            type='text'
            name='name'
            value ={name}
            id='name'
            handleChange={this.handleChange}
            label='Name on aadhaar'
            maxLength='25'
          />
          <CleaveFormInput
            name='dob'
            id='dob'
            placeholder='dd/mm/yyyy'
            handleChange={this.handleChange}
            label='Date of birth'
            options={{
              date : true
            }}
          />
          <CustomButton type='submit'>Search</CustomButton>
        </form>
      </div>
    )
  }
}

export default LostAadhaar;