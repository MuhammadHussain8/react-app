import React from 'react'
import SideBar from '../components/common-components/SideBar'
import Header from '../components/common-components/Header'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <section className='w-full h-screen flex justify-between'>
        <div className="sidebar w-[230px] h-full">
           
            <SideBar/>
        </div>
        <div className="main w-[1100px] h-full   bg-[#F9F9F9]">
            <div className='max-w-[1000px] border bg-red-200 mx-auto'>
            <div className="header">
                <Header/>
            </div>
            <div className="main-content">
                <Outlet/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default LayOut