import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/footer'

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <main className='min-h-screen container'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default AppLayout
