import React from 'react'
import Header from './Header'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {
  return (
   <>
   <Header/>
   <Navber/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayout