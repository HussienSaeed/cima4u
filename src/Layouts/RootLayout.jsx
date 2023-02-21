import React from 'react'
import MyNavbar from '../Components/MyNavbar/MyNavbar'
import {Outlet} from 'react-router-dom'
export default function RootLayout() {
  return (
    <>
          <MyNavbar />
          <Outlet/>
          
    </>
  )
}

