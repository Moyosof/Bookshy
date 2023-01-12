import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './screens/Home'

const AppHero = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path='/'>
        <Route path='' element={<Home/>} />
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppHero