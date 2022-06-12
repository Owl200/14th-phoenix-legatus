import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useCycle } from 'framer-motion'
import './Navbar.css'

//variants for the nav background
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 49px) calc(100% - 50px))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 49px) calc(100% - 50px))",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

//variants for use on the Navlink animations
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

//variants for the li on the Navlinks
const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 1000,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

//creates a Path component to be used on the SVG
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [isOpen, toggleOpen] = useCycle(false, true)

  //gets the current windos size to check on what type of nav will be rendered
  useEffect( _ => {
    window.addEventListener('resize', _ => setWindowSize(window.innerWidth))
  }, [windowSize])

  // handles the state for the animation on the button
  const handleClick = () => {
    toggleOpen()
  }

  return (
    <div className='nav-wrapper'>
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
    <>
      <motion.nav id='nav_mini' initial={false} animate={isOpen ? "open" : "closed"} >
        <motion.button id='nav__button' onClick={handleClick} >
          <svg width='23' height='23' viewBox='0 0 23 23' >
            <Path variants={ {closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" }} }/>
            <Path d="M 2 9.423 L 20 9.423" variants={ { closed: { opacity: 1 }, open: { opacity: 0 }} } transition={{ duration: 0.1 }}/>
            <Path variants={ {closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" }} }/>
          </svg>  
        </motion.button> 
        <motion.div className='nav_mini-background' variants={sidebar}/>
        <motion.ul id='nav__list-mini' variants={variants}>
          <motion.li variants={liVariants}>
            <NavLink to='/' activeClassName='nav__list-mini--active' onClick={handleClick}>Inicio</NavLink>
          </motion.li>
          <motion.li variants={liVariants}>
            <NavLink to='/about-us' activeClassName='nav__list-mini--active' onClick={handleClick}>Conocenos</NavLink>
          </motion.li>
          <motion.li variants={liVariants}>
            <NavLink to='/house' activeClassName='nav__list-mini--active' onClick={handleClick}>Casa</NavLink>
          </motion.li>
          <motion.li variants={liVariants}>
            <NavLink to='/ranks' activeClassName='nav__list-mini--active' onClick={handleClick}>Rangos</NavLink>
          </motion.li>
          <motion.li variants={liVariants}>
            <NavLink to='/contact-us' activeClassName='nav__list-mini--active' onClick={handleClick}>Contactanos</NavLink>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  }
  </div>
  )
}

export default Navbar