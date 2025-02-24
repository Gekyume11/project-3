import React, { useEffect, useState } from 'react'
import Sidebar from '../Elements/Sidebar'
import { motion } from 'framer-motion'

const Dashboard = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <section className='h-dvh relative flex justify-end'>

            <Sidebar onToggle={setIsSidebarOpen} />

            <motion.div className='absolute bottom-0 right-0 h-[calc(100dvh_-_60px)] w-[calc(100dvw_-_280px)]'
                initial={false}
                animate={screenWidth > 600 ? 
                    { width: isSidebarOpen ? 'calc(100% - 280px)' : 'calc(100% - 40px)' } : 
                    { x: isSidebarOpen ? 280 : 0, width: screenWidth > 600 ? '100%' : 'calc(100% - 40px)' }}
                transition={{
                    ease: [.56, 0, 0, .97],
                    duration: .4
                }}
            >
                {children}

            </motion.div>

        </section>
    )
}

export default Dashboard
