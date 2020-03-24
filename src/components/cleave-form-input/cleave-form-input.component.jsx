import React from 'react'
import './cleave-form-input.styles.scss';
import Cleave from 'cleave.js/react';

const CleaveFormInput = ({ label,  handleChange, ...otherProps }) => (
  <div className="group">
    {
      label ?
      (
        <label htmlFor={ otherProps.id }>{ label.toUpperCase() }</label>
      ) : null
    }
    <Cleave  { ...otherProps } onChange={ handleChange }/>
  </div>
)

export default CleaveFormInput;