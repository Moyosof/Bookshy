import React from 'react'
import './Collection.css'
import map from '../../assest/map.png'
import water from '../../assest/water.png'
import city from '../../assest/city.png'
import thrones from '../../assest/thrones.png'
import red from '../../assest/red.png'
import guy from '../../assest/guy.png'
import aduke from '../../assest/aduke.png'

const Collection = () => {
  return (
    <div className='top'>
        <div className='text'>
        <h1>Top Collection</h1>
        </div>
        <div className='collect'>
            <div className='coll'>
            <div className='col1'>
                <img src={thrones} alt ='' />
                </div>
                <div className='col2'>
                <img src={water} alt ='' />
                <img src={city} alt ='' />
                <img src={map} alt ='' />
            </div>

            <div className='hibs'>
                <p> <b>Purple Hisbiscus</b></p>
                <div className='adiche'>
                    <img src={red} alt='' /> 
                    <p> By <b>Chimamanda Adiche</b></p>
                </div>

            </div>
            </div>

            <div className='coll'>
            <div className='col1'>
                <img src={thrones} alt ='' />
                </div>
                <div className='col2'>
                <img src={water} alt ='' />
                <img src={city} alt ='' />
                <img src={map} alt ='' />
            </div>

            <div className='hibs'>
                <p> <b>Cyan Hisbiscus</b></p>
                <div className='adiche'>
                    <img src={guy} alt='' /> 
                    <p> By <b>Alex Chima Ogbanje</b></p>
                </div>

            </div>
            </div>
            <div className='coll'>
            <div className='col1'>
                <img src={thrones} alt ='' />
                </div>
                <div className='col2'>
                <img src={water} alt ='' />
                <img src={city} alt ='' />
                <img src={map} alt ='' />
            </div>

            <div className='hibs'>
                <p> <b>Rolling Stone</b></p>
                <div className='adiche'>
                    <img src={aduke} alt='' /> 
                    <p> By <b>Janet Effiong Dekono</b></p>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Collection