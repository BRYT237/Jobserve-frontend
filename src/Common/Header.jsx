import React from 'react'
import logo from "../assets/logo.png"
import "../CSS/header.css"
import "../CSS/media.css"

const Header = () => {
  return (
    <div className='mainD'>
      <header className="head">
        <nav className='nav'>
            <div className='mainA'>
                <img src={logo} alt="" style={{
                    width: "60px"
                }} />
                <a href="" >Home</a>
                <a href="">About Us</a>
            </div>
            {/*  */}
            <div className='mainB'>
                <a href="/login">Sign in</a>
                <a href="/job">Post Job</a>
            </div> 
        </nav>
      </header>
    </div>
  )
}




export default Header
