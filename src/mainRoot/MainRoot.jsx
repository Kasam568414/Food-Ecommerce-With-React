import React from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/home/Footer'

const MainRoot = () => {
  return (
   
    <>
    <Navbar></Navbar>
  <div>
  <Outlet></Outlet>
  </div>
  <Footer></Footer>
 
    </>
  )
}

export default MainRoot