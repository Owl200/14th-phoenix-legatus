import React from 'react'
import './contact.css'
import xiv from './images/xiv.png'
import fb from './images/facebook.png'
import discord from './images/discord.png'

const Contact = () => {
  return (
    <div>
      <h2>Quieres unirte a nuestra FC? Invitarnos a una fiesta o bar?</h2>
      <h3>Encuentranos aqui!</h3>
      <div className='link-container'>
        <a href="https://discord.gg/y59rqZZNvS" target='_blank' rel='noreferrer'><img src={discord} alt="facebook link" /></a>
        <a href="https://facebook.com" target='_blank' rel='noreferrer'><img src={fb} alt="discord link" /></a>
        <a href="https://na.finalfantasyxiv.com/lodestone/freecompany/9228157111458983655/" target='_blank' rel='noreferrer'><img src={xiv} alt="loadstone link" /></a>
      </div>
    </div>
  )
}

export default Contact