import React from 'react'
import './lost-voter.styles.scss'

import NormalFormInput from '../../../normal-form-input/normal-form-input.component'
import CleaveFormInput from '../../../cleave-form-input/cleave-form-input.component'
import CustomButton from '../../../custom-button/custom-button.component'

class LostVoter extends React.Component {
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
    return (
      <div className="lost">
        <h3 className="title">I have lost my voter card.</h3>
        <span className="subtile">Search your voter card with voter number or name and date of birth.</span>
        <form className="lost-form" onSubmit={ this.handleSubmit }>
          <NormalFormInput
            type='text'
            name='epicNo'
            value={epicNo}
            id = 'epicNo'
            maxLength='20'
            label='Epic no'
            handleChange={ this.handleChange }
          />
          <h3 className="center">OR</h3>
          <NormalFormInput
            type='text'
            name='name'
            value={name}
            id='name'
            maxLength='25'
            label='Name on voter card'
            handleChange={ this.handleChange }
          />
          <CleaveFormInput
            id='dob' name='dob'
            placeholder='dd/mm/yyyy'
            options={{date: true,datePattern: ['d', 'm', 'Y']}}
            label='Date of birth' handleChange={ this.handleChange }
          />
          <CustomButton type='submit'>Search</CustomButton>
        </form>
      </div>
    )
  }
}

export default LostVoter;