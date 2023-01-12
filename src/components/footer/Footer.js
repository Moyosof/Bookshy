import React from 'react'
import './Footer.css'
import logo from '../../assest/logo1.png'
import frame from '../../assest/Frame.png'
import c from '../../assest/c.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='end'>
        <div className='logos'>
            <img src={logo} alt='' />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur consequat, et pharetra porta sed nibh. Nisi leo arcu, orci in at elit integer. Ultrices pharetra, nulla mauris pellentesque vestibulum suscipit. Blandit rhoncus quam amet, nibh.
            </p>

            <img src={frame} alt='' />
        </div>
       <div className='foot'>
            <div className='place'>
                    <div>
                        <h4>Market Place</h4>
                        <p> All Novels</p>
                        <p> All NFTs</p>
                        <p> Collectibles</p>
                        <p> Maps</p>
                    </div>
                    <div className='res'>
                        <h4>Resources</h4>
                        <p> Help Centers</p>
                        <p> Partners</p>
                        <p> Docs</p>
                    </div>
            </div>

            <div className='company'>
                    <div className='about'>
                        <h4>Company</h4>
                        <p> About Us</p>
                        <p> Contact Us</p>
                    </div>

                    <div className='stats'>
                        <h4>Statistic</h4>
                        <p> Ranking</p>
                        <p> Activities</p>
                     </div>
            </div>

       </div>
        </div>
       <div className='terms'>
            <div className='term'>
                <div className='trm'><h4>Terms</h4></div>
                <div className='policy'><p>Privacy policy </p></div>
            </div>
            <div className='right'>
                <img src={c} alt='' /> 
                <div><h4> 2022 Bookshhy. All right reserved.</h4></div>
            </div>
       </div>

    </div>
  )
}

export default Footer