import React from 'react';
import './directory.styles.scss' 

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sections : [
        {
          id : 1,
          title : 'aadhaar card',
          linkUrl : 'aadhaar'
        },
        {
          id : 2,
          title : 'voter card',
          linkUrl : 'voter'
        },
        {
          id : 3,
          title : 'pan card',
          linkUrl : 'pan'
        },
        {
          id : 4,
          title : 'passport',
          linkUrl : 'passport'
        },
        {
          id : 5,
          title : 'driving licence',
          linkUrl : 'driving'
        },
        {
          id : 6,
          title : 'debit/credit card',
          linkUrl : 'debit'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory">
        {
          this.state.sections.map( ({id, ...otherProps }) => <MenuItem key={ id } { ...otherProps } />)
        }
      </div>
    )
  }
}

export default Directory;