import React from 'react'
import Header from './components/Index/Header'
import Footer from './components/Index/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout