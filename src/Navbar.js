import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [navIsVisible, setNavIsVisible] = useState(false)

  useEffect( _ => {
    window.addEventListener('resize', _ => setWindowSize(window.innerWidth))
  }, [windowSize])

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );

  const handleClick = () => setNavIsVisible(!navIsVisible)

  return (
    <>
    { (windowSize >= '700')  ?
    <nav id='nav--sticky'>
        <ul id='nav__list'>
            <li><NavLink to='/' className='nav__list-item' activeClassName='nav__list-item--active'>Inicio</NavLink></li>
            <li><NavLink to='/about-us' className='nav__list-item' activeClassName='nav__list-item--active'>Conocenos</NavLink></li>
            <li><NavLink to='/house' className='nav__list-item' activeClassName='nav__list-item--active'>Casa</NavLink></li>
            <li><NavLink to='/ranks' className='nav__list-item' activeClassName='nav__list-item--active'>Rangos</NavLink></li>
            <li><NavLink to='/contact-us' className='nav__list-item' activeClassName='nav__list-item--active'>Contactanos</NavLink></li>
        </ul>
    </nav> :
    !navIsVisible ?
    <button id='nav__button' onClick={handleClick}>
       <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button> :
    <>
      <button id='nav__list-mini-button--clicked' onClick={handleClick}>+</button>
      <nav id='nav_mini'>
        <ul id='nav__list-mini'>
          <li><NavLink to='/' activeClassName='nav__list-mini--active' onClick={handleClick}>Inicio</NavLink></li>
          <li><NavLink to='/about-us' activeClassName='nav__list-mini--active' onClick={handleClick}>Conocenos</NavLink></li>
          <li><NavLink to='/house' activeClassName='nav__list-mini--active' onClick={handleClick}>Casa</NavLink></li>
          <li><NavLink to='/ranks' activeClassName='nav__list-mini--active' onClick={handleClick}>Rangos</NavLink></li>
          <li><NavLink to='/contact-us' activeClassName='nav__list-mini--active' onClick={handleClick}>Contactanos</NavLink></li>
        </ul>
      </nav>
    </>
  }
  </>
  )
}

export default Navbar