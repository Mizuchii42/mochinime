import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Viewpage from './page/data/[id]'
import Navbutton from './componnent/btm'
import Navbar from './componnent/nav'
import Search from './page/search'
import Strm from './page/strim/[slug]'
import Changelog from './page/changelog'
import Mainten from './page/maintent'
//import { useEffect, useState } from 'react'
//import axios from 'axios'
function App() {
  return (
    <>
      <div className='w-full h-svh font-fira bg-gray-800 text-white'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Mainten />} />
            <Route path='/data/:id' element={<Viewpage />} />
            <Route path='/strim/:slug' element={<Strm />} />
            <Route path='/search' element={<Mainten />} />
            <Route path='/changelog' element={<Changelog />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
