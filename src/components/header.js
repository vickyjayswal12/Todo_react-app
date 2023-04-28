import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'> 
    {/* <h2>Todo app</h2> */}
      <div className="list">
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/aboutus">aboutUs</Link></li>
            <li><Link to="/contactus">contactUs</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
