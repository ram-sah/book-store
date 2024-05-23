import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Course from './components/Course'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-600 py-1 dark:text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
