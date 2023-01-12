import React from 'react'
import './Nft.css'
import fireboy from '../../assest/fireboy.png'
import icey from '../../assest/icey.png'
import arwman from '../../assest/arwman.png'
import magic from '../../assest/magic.png'
import scorp from '../../assest/scorp.png'
import witch from '../../assest/witch.png'
import egypt from '../../assest/egypt.png'
import hero from '../../assest/hero.png'



const Nft = () => {
  return (
    <div className='nft'>
         <div className='sames'>
            <div className='li'>
                <h1><span>NFT Marketplace</span> </h1>
            </div>
            <div className='lore'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Vel vulputate laoreet ullamcorper erat amet, velit. </p>
            </div>
        </div>
        <div className='btns' id='bt'>
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

        <div className='arts'>
            <div className='art1'>
              <img src={fireboy} alt="" />
              <img  src={icey} alt="" />
              <img className='n_art' src={arwman} alt="" />
              <img className='n_art' src={magic} alt="" />
            </div>
            <div className='art1'>
              <img className='n_art' src={scorp} alt="" />
              <img className='n_art' src={witch} alt="" />
              <img className='n_art' src={egypt} alt="" />
              <img className='n_art' src={hero} alt="" />
            </div>
        </div>

        <div className='load'>
          <button> Load More</button>
        </div>


    </div>
  )
}

export default Nft