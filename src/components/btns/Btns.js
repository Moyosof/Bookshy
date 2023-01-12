import React from 'react'
import './Btns.css'
import bird from '../../assest/birdie.png'
import demon from '../../assest/demon.png'
import lady from '../../assest/lady.png'
import light from '../../assest/light.png'
import fire from '../../assest/fire.png'
import woman from '../../assest/woman.png'

const Btns = () => {
  return (
    <div className='all'>
        <div className='same'>
            <div className='lib'>
                <h1> Explore Library</h1>
            </div>
            <div className='lorem'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Vel vulputate laoreet ullamcorper erat amet, velit. </p>
            </div>
        </div>
        <div className='btns'>
            <button> Action</button>
            <button> Adventure</button>
            <button> Comedy</button>
            <button> Crime & Mystery</button>
            <button> Fantsay</button>
            <button> Horror</button>
            <button> Historical</button>
            <button> Romance</button>
            <button> More</button>

        </div>
        <div className='imags'>
            <div className='img'>
                <img className='one' src={bird} alt='' />
                <img className='two' src={demon} alt='' />
                <img className='five' src={fire} alt='' />
                <img className='six' src={light} alt='' />
                <img className='seven' src={lady} alt='' />
            </div>
            <div className='img1'>
                <img className='three' src={lady} alt='' />
                <img className='four' src={demon} alt='' />
                <img className='eight' src={woman} alt='' />
                <img className='nine' src={bird} alt='' />
                <img className='nine' src={bird} alt='' />
                <img className='nine' src={bird} alt='' />
                <img className='nine' src={bird} alt='' />


            </div>

        </div>

    </div>
  )
}

export default Btns