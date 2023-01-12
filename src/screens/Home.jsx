import React from 'react'
import './Home.css'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Card from '../components/card/Card'
import Display from '../components/displays/Display'
import Btns from '../components/btns/Btns'
import Nft from '../components/nft/Nft'
import Collection from '../components/collections/Collection'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <Card/>
        <Display/>
        <Btns/>
        <Nft/>
        <Collection/>
        <Footer/>
    </div>
  )
}




export default Home