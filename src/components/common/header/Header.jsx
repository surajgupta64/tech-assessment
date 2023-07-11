import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <Link to='/' onClick={() => setNavList(false)}>Home</Link>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              <li >
                <Link to='/History' onClick={() => setNavList(false)}>History</Link>
              </li>
              <li >
                <Link to='/Cart' onClick={() => setNavList(false)}>Cart</Link>
              </li>
            </ul>
          </div>


          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
