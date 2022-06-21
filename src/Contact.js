import React from 'react'
import './contact.css'
import xiv from './images/xiv.png'
// import fb from './images/facebook.png'
import discord from './images/discord.png'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  final: {
    transition: { staggerChildren: 0.05, staggerDirection: 1 }
  }
}

const linkVariants ={
  initial: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 100, velocity: 100 }
  }
  }
}

const Contact = () => {
  return (
    <div>
      <h2>Quieres unirte a nuestra FC? Invitarnos a una fiesta o bar?</h2>
      <h3>Encuentranos aqui!</h3>
      <motion.div variants={variants} initial='initial' animate='final' className='link-container'>
        <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 1.3}} variants={linkVariants} href="https://discord.gg/y59rqZZNvS" target='_blank' rel='noreferrer'><img src={discord} alt="facebook link" /></motion.a>
        {/* <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 1.3}} variants={linkVariants} href="https://facebook.com" target='_blank' rel='noreferrer'><img src={fb} alt="discord link" /></motion.a> */}
        <motion.a whileHover={{scale: 1.2}} whileTap={{scale: 1.3}} variants={linkVariants} href="https://na.finalfantasyxiv.com/lodestone/freecompany/9228157111458983655/" target='_blank' rel='noreferrer'><img src={xiv} alt="loadstone link" /></motion.a>
      </motion.div>
      {/* <footer>
        <p>Quieres tu propia pagina personalizada</p>
      </footer> */}
    </div>
  )
}

export default Contact