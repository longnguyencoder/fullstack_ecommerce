import React from "react";
import { Outlet } from 'react-router-dom'
import { Header, Navigation, TopHeader, Footer } from '../../components'
const Public = () => {
    return (
        <div className='w-full flex flex-col items-center max-h-screen overflow-y-auto'>
            <TopHeader />
            <Header />
            <Navigation />
            <div className='w-full flex-col flex items-center'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Public