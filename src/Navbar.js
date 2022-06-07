import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [navIsVisible, setNavIsVisible] = useState(false)

  useEffect( _ => {
    window.addEventListener('resize', _ => setWindowSize(window.innerWidth))
  }, [windowSize])
  
  let activeStyle = {
    color: 'black',
  }

  const handleClick = () => setNavIsVisible(!navIsVisible)

  return (
    <>
    { (windowSize >= '700')  ?
    <nav>
        <ul id='nav__list'>
            <li><NavLink to='/' style={({isActive}) => isActive ? activeStyle : undefined}>Inicio</NavLink></li>
            <li><NavLink to='/about-us' style={({isActive}) => isActive ? activeStyle : undefined}>Conocenos</NavLink></li>
            <li><NavLink to='/house' style={({isActive}) => isActive ? activeStyle : undefined}>Casa</NavLink></li>
            <li><NavLink to='/ranks' style={({isActive}) => isActive ? activeStyle : undefined}>Rangos</NavLink></li>
            <li><NavLink to='/contact-us' style={({isActive}) => isActive ? activeStyle : undefined}>Contactanos</NavLink></li>
        </ul>
    </nav> :
    !navIsVisible ?
    <button id='nav__button' onClick={handleClick}>+</button> :
    <>
      <button id='nav__list-mini-button--clicked' onClick={handleClick}>+</button>
      <nav id='nav_mini'>
        <ul id='nav__list-mini'>
          <li><NavLink to='/' style={({isActive}) => isActive ? activeStyle : undefined}>Inicio</NavLink></li>
          <li><NavLink to='/about-us' style={({isActive}) => isActive ? activeStyle : undefined}>Conocenos</NavLink></li>
          <li><NavLink to='/house' style={({isActive}) => isActive ? activeStyle : undefined}>Casa</NavLink></li>
          <li><NavLink to='/ranks' style={({isActive}) => isActive ? activeStyle : undefined}>Rangos</NavLink></li>
          <li><NavLink to='/contact-us' style={({isActive}) => isActive ? activeStyle : undefined}>Contactanos</NavLink></li>
        </ul>
      </nav>
    </>
  }
  </>
  )
}

export default Navbar