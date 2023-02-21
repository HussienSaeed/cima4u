import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../Components/MyNavbar/MyNavbar'

export default function AuthLayout() {
  return (
    <>
      <MyNavbar auth={true} />
      <div className='w-50 m-auto my-5'>
      <Outlet/>
      </div>
    </>
  )
}
