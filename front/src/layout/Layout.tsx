import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
function Layout() {
    return (
        <div className='flex'>
            <SideBar />

            <div className='flex-1 flex flex-col'>
                {/* <NavBar /> */}
                <Outlet />
            </div>
        </div >
    )
}

export default Layout