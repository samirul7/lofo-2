import React from 'react'
import './found-voter.styles.scss' 

import NormalFormInput from '../../../normal-form-input/normal-form-input.component'
import CleaveFormInput from '../../../cleave-form-input/cleave-form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'

class FoundVoter extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      epicNo : '',
      name : '',
      dob : ''
    }
  }

  handleChange = event => {
    const { name, value, rawValue } = event.target;
    let actualValue;
    switch(name){
      case 'dob' : actualValue=rawValue; break;
      default : actualValue=value;
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
    const { epicNo, name } = this.state;
    return(
      <div className="found">
        <h3 className="title">I found a voter card.</h3>
        <span className="subtile">Fill Epic number, name and date of birth.</span>
        <form className="found-form" onSubmit={ this.handleSubmit }>
          <NormalFormInput
            type='text'
            name='epicNo'
            value={epicNo}
            id = 'fepicNo'
            maxLength='20'
            label='Epic no'
            handleChange={ this.handleChange }
            required
          />
          <NormalFormInput
            type='text'
            name='name'
            value={name}
            id='fname'
            maxLength='25'
            label='Name on voter card'
            handleChange={ this.handleChange }
            required
          />
          <CleaveFormInput
            id='fdob'
            name='dob'
            placeholder='dd/mm/yyyy'
            options={{date: true,datePattern: ['d', 'm', 'Y']}}
            label='Date of birth' handleChange={ this.handleChange }
            required
          />
          <CustomButton type='submit'>Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default FoundVoter;