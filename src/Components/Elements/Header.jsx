import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    const [loggedInUser, setLoggedInUser] = useState('UserName')
    const [userDialogBox, setUserDialogBox] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('selectedTheme') === 'dark');

    const sunPath = "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
    const moonPath = "M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C15.5 9 9 15.5 1 9C1 13.4183 4.58172 17 9 17Z"

    const sunPaths = [
        "M12 2V4",
        "M19.07 4.92999L17.66 6.33999",
        "M20 12H22",
        "M17.66 17.66L19.07 19.07",
        "M12 20V22",
        "M6.33999 17.66L4.92999 19.07",
        "M2 12H4",
        "M4.92999 4.92999L6.33999 6.33999"
    ];


    const body = document.querySelector('body')

    const applyTheme = (mode) => {
        body.classList.remove(mode === 'dark' ? 'light' : 'dark');
        body.classList.add(mode);
        localStorage.setItem('selectedTheme', mode)
        setIsDarkMode(mode === 'dark')
    }

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (localStorage.getItem('selectedTheme')) {
            applyTheme(localStorage.getItem('selectedTheme'))
        } else {
            prefersDarkScheme ? applyTheme('dark') : applyTheme('light');
        }
    }, [])

    return (
        <header className='fixed top-0 left-0 z-999 flex justify-between items-center h-15 border-b-[1px] border-b-slate-500'>
            <Link
                to='/'
                className='tracking-[1px] 400px:text-lg font-medium'
            >
                Career-Pulse
            </Link>

            <div className='flex 400px:gap-4 gap-2 relative'>
                <button className='p-0 size-8 grid place-items-center' onClick={() => applyTheme(isDarkMode ? 'light' : 'dark')}>
                    <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {sunPaths.map((d, index) => (
                            <motion.path key={index} d={d} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                initial={false}
                                animate={{
                                    rotate: !isDarkMode ? '360deg' : '-360deg',
                                    opacity: !isDarkMode ? 0 : 1,
                                    stroke: isDarkMode ? 'white' : 'black'
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'backInOut'
                                }}
                            />
                        ))}
                        <motion.path
                            d={!isDarkMode ? moonPath : sunPath}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={false}
                            animate={{
                                d: !isDarkMode ? moonPath : sunPath,
                                stroke: isDarkMode ? 'white' : 'black',
                                y: !isDarkMode ? 3 : 0,
                                x: !isDarkMode ? 2 : 0,
                                rotate: !isDarkMode ? '360deg' : 0,
                            }}
                            transition={{
                                duration: 1,
                                ease: [.86, -0.44, .19, 1.43]
                            }}
                        />
                    </motion.svg>

                </button>
                {!loggedInUser && <button onClick={() => navigate('/login')} className='py-1 px-2 sm:px-4 400px:text-base text-[10px]'><svg width="20" height="20" viewBox="0 0 22 22" fill="none" className='400px:hidden' xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10.5C14.4853 10.5 16.5 8.48527 16.5 6C16.5 3.51473 14.4853 1.5 12 1.5C9.51473 1.5 7.5 3.51473 7.5 6C7.5 8.48527 9.51473 10.5 12 10.5Z" fill={isDarkMode ? 'white' : 'black'} />
                    <path d="M21 18C21 15.5146 18.9854 13.5 16.5 13.5H7.5C5.01473 13.5 3 15.5146 3 18V22.5H21V18Z" fill={isDarkMode ? 'white' : 'black'} />
                </svg>
                    <span className='400px:inline hidden'>Login</span><span className='sm:inline hidden'> / signup</span></button>}
                {loggedInUser && <button
                    className='p-0 size-8 grid place-items-center' onClick={() => setUserDialogBox(!userDialogBox)}>
                    {loggedInUser.split('')[0]}
                </button>}
                {loggedInUser &&
                
                    <AnimatePresence>
                        {userDialogBox && <motion.div
                            className='bg-inherit border-[1px] py-4 px-6 w-[274px] rounded-md border-slate-500 absolute top-[160%] right-0'
                            initial={{
                                scale: .7,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: .7,
                                opacity: 0,
                            }}
                        >
                            <div className='flex gap-2 pb-2 justify-center items-center'>
                                <span>User : </span>
                                <h1>{loggedInUser}</h1>
                            </div>
                            <div className='w-full cursor-pointer hover:opacity-70 text-center py-1 rounded-sm border-[1px]'>Logout</div>
                        </motion.div>}
                    </AnimatePresence>
                }
            </div>

        </header>
    )
}

export default Header
