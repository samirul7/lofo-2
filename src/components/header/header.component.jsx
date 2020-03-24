import React from 'react'
import './header.styles.scss' 
import { Link } from 'react-router-dom'



const Header = ({ isLogin }) => (
  <div className="header">
    <div className="logo-container">
      <Link to='/' className="logo">LoFo</Link>
    </div>
    <div className="options">
      <Link to='/about' className="option">About</Link>
      <Link to='/contact' className="option">Contact</Link>
      {
        isLogin ?
        ( <Link to='/' className="option">Log Out</Link> ) : /* perform sign out operation */
        (
          <div className='options'>
            <Link to='/sign-in' className="option">Sign In</Link>
            <Link to='/sign-up' className="option">Sign Up</Link>
          </div>
        )
      }
    </div>
  </div>
)

export default Header;