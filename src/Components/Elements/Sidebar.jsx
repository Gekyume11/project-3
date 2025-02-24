import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Sidebar = ({ onToggle }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen); // Notify parent component (Dashboard)
    }

    return (
        <motion.div className='absolute border border-t-0 overflow-hidden top-15 left-0 h-[calc(100dvh_-_60px)] w-full max-w-70 z-1'
            initial={false}
            animate={{
                x: isOpen ? '0' : 'calc(-100% + 38px) ',
                transition: {
                    ease: [.56, 0, 0, .97],
                    duration: .4
                }
            }}
        >
            <div className='w-full'>
                <div className='py-2 flex border-b-1 head-line justify-between items-center w-full'>
                    <p className='ps-3.5 text-lg'>Sidebar</p>
                    <span className='w-10 grid place-items-center cursor-pointer' onClick={toggleSidebar}>
                        {isOpen ? (
                                <i className="text-xl ri-close-large-fill"></i>
                        ) : (
                                <i className="text-xl ri-menu-line"></i>
                        )}
                    </span>
                </div>
            </div>
            <div style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }} className='flex flex-col justify-between text-center'>
                {/* <Link className='py-5 outline' to='#'>Dashboard</Link> */}
                <Link to='/dashboard/student' className='py-5 outline'>Student</Link>
                <Link to='/dashboard/course' className='py-5 outline'>Course</Link>
                <Link to='/dashboard/company' className='py-5 outline'>Company</Link>
                <Link to='/dashboard/interview' className='py-5 outline'>Interview</Link>
            </div>

            <Link style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }} className='py-5 absolute leading-[1] px-3.5 flex items-center justify-between left-0 bottom-0 text-center outline w-full' to='#'>Logout <i className="ri-logout-box-r-line text-"></i></Link>
        </motion.div>
    )
}

export default Sidebar
