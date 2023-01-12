import React from 'react'
import './Card.css'
import hole from '../../assest/blak hole.png'
import house from '../../assest/in the house.png'
import dependence from '../../assest/dependence.png'
import beauty from '../../assest/beauty of life.png'
import lady from '../../assest/lad.png'

const card = () => {
  return (
    <div className='card'>
      <div className='bg-image'>
        <p> Trending Novels for you</p>
          <div className='images'>
            <div className='phase1'>
              <img src={ hole} alt='hole' />
              <img src={ house} alt='house' />
            </div>
            <div className='phase2'>
              <img src={ beauty} alt='house' />
              <img src={ lady} alt='house' />
            </div>
            <div className='phase3'>
               <img src={ dependence} alt='house' />
            </div>


          </div>
      </div>

    </div>
  )
}

export default card