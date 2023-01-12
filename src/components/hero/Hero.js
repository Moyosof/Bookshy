import React from 'react'
import './Hero.css'
import crypto from '../../assest/crypto.png'
import download from '../../assest/download.png'
import sphere from '../../assest/sphere.png'

const Hero = () => {
  return (
    <div className='body'>
        <div className='text'>
            <h1>Experience The Real <span>Happiness</span> Books Brings!</h1>
            <p>The copywriters that will work on this project are still on their leave, I'm just doing my own little bit here but we shouln't do more than 2-3 lines here</p>
            <button className='btn'> Join the Community</button>
            <div className='crypto'><img src={crypto} alt='img' /></div>
            <div className='download'><img src={download} alt='img' /></div>
        </div>
        <div className='sphere'>
            <img src={sphere} alt='sphere' />
        </div>
    </div>
  )
}

export default Hero