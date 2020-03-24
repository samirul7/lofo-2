import React from 'react'
import './normal-form-input.styles.scss' 

const NormalFormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    {
      label ? 
      (
        <label htmlFor={ otherProps.id }>{ label.toUpperCase() }</label>
      ) : 
      null
    }
    <input { ...otherProps } onChange={ handleChange } />
  </div>
)

export default NormalFormInput;