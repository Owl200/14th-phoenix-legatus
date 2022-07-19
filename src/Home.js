import React from 'react'
import thumbnail from './images/thumb-inicio.webp'
import { motion } from 'framer-motion'
import './home.css'

const Home = () => {
  return (
    <>
        <h3>Somos una pequeña y amorosa <span>Free Company latina</span>, estamos ubicados en <span>Brynhildr</span> en el servidor de <span>Crystal</span>. </h3>
        <motion.img animate={{ opacity: 1, y: 0}} initial={{opacity: 0, y: 200}} className='inicio-img' src={thumbnail} transition={{ duration: 1 }} alt='thumbnail' />
    </>
  )
}

export default Home