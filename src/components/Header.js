import HeaderNavBar from './HeaderNavBar'
import logo from '../assets/images/logo.png'
import React from 'react'

const Header = () => (
  <div className='header-page'>
    <a className='logo-brand' href='/'>
      <img className='logo-image' src={logo} />
      <span>{`electrica.io`}</span>
    </a>
    <HeaderNavBar />
  </div>
)

export default Header
