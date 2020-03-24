import React from 'react'
import './voter.styles.scss' 

import LostVoter from '../../../components/sections/voter/lost-voter/lost-voter.component'
import FoundVoter from '../../../components/sections/voter/found-voter/found-voter.component'

const VoterPage = () => (
  <div className="voter">
    <LostVoter />
    <FoundVoter />
  </div>
)

export default VoterPage;