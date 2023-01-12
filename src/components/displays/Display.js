import React from 'react'
import './Display.css'
import map from '../../assest/map.png'
import city from '../../assest/city.png'
import water from '../../assest/water.png'
import thrones from '../../assest/thrones.png'
import town from '../../assest/town.png'
import crackdown from '../../assest/crackdown.png'


const Display = () => {
  return (
    <div className='display'>
        <div className='texting'>
            <div className='best'> 
                <h1> We are the best collectors of <br/> <span>Novel maps</span></h1>
            </div> 
            <div>
                 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> <br/>
                <p> <span> Find collections --> </span>
                </p>
            </div>

        </div>

        <div  className='pics'>
               <div className='gp'>
               <div className='pc'>
                <div className='pc1'>
                        <img src={map} alt='map'/>
                    </div>
                    <div className='pc2'>
                        <img src={city} alt='map'/>
                    </div>
                    <div className='pc0'>
                        <img src={water} alt='map'/>
                    </div>
               </div>
                <div className='pcs'>
                    <div className='pc3'>
                        <img src={water} alt='map'/>
                    </div>
                    <div className='pc4'>
                        <img src={town} alt='map'/>
                    </div>
                    <div className='pc9'>
                        <img src={map} alt='map'/>
                    </div>
                    <div className='pc6'>
                        <img src={crackdown} alt='map'/>
                    </div>
                </div>
               </div>
                <div className='pc5'> 
                    <img src={thrones} alt='throne' />
                </div>
                
        </div>

    </div>
  )
}

export default Display