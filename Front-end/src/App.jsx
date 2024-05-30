import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser] = useAuth();  // Destructure only authUser from useAuth

  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-600 py-1 dark:text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={authUser ? <Course /> : <Navigate to='/signup' />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </>
  );
}

export default App;
