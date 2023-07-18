import React from 'react'
import logo from '../assets/logo_footer.png'
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container_footer'>
            <img src={logo} alt="" className='logo_footer'/>
            <p className='content_footer'>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
