import React from 'react';
import './menu-item.styles.scss' 
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, linkUrl, history, match }) => (
  <div onClick={ () => { history.push(`${match.path}${linkUrl}`)}} className="menu-item">
    <h3 className="title">{ title.toUpperCase() }</h3>
    <span>EXPLORE</span>
  </div>
)

export default withRouter(MenuItem);