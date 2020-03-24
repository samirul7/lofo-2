import React from 'react'
import './found-aadhaar.styles.scss'

import NormalFormInput from '../../../normal-form-input/normal-form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'
import CleaveFormInput from '../../../cleave-form-input/cleave-form-input.component'

class FoundAadhaar extends React.Component {
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
  
  render(){
    const { name } = this.state;
    return (
      <div className="found">
        <h3 className="title">I found an aadhaar card.</h3>
        <span className="subtile">Fill aadhaar number, name and date of birth.</span>
        <form onSubmit={ this.handleSubmit } className="lost-form">
          <CleaveFormInput
            options={{blocks: [4,4,4], delimiter: ' ', numericOnly: true}}
            handleChange={this.handleChange}
            name='aadhaarNo'
            id='faadhaarNo'
            label='Aadhaar No'
            required
          />
          <NormalFormInput
            type='text'
            name='name'
            value ={name}
            id='fname'
            handleChange={this.handleChange}
            label='Name on aadhaar'
            maxLength='25'
            required
          />
          <CleaveFormInput
            name='dob'
            id='fdob'
            placeholder='dd/mm/yyyy'
            handleChange={this.handleChange}
            label='Date of birth'
            options={{
              date : true
            }}
            required
          />
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default FoundAadhaar;