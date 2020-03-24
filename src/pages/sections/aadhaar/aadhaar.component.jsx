import React from 'react';
import './aadhaar.styles.scss' 

import LostAadhaar from '../../../components/sections/aadhaar/lost-aadhaar/lost-aadhaar.component';
import FoundAadhaar from '../../../components/sections/aadhaar/found-aadhaar/found-aadhaar.component'

const Aadhaar = () => (
  <div className="aadhaar">
    <LostAadhaar />
    <FoundAadhaar />
  </div>
)

export default Aadhaar;