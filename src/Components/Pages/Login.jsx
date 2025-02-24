import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Login = () => {

    const [loginMode, setLoginMode] = useState(false)
    const [screenWidth, setScreenWidth] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='h-dvh grid place-items-center'>
            <div className='p-4 flex head-line flex-col gap-5 400px:gap-3 size-full max-h-[400px] max-w-[640px] rounded-lg border-1'>
                <div className='grid 400px:grid-cols-2 gap-3.5 h-fit text-center'>
                    <motion.div className='py-3 btn px-4 rounded-md transition-all duration-300 ease-in' onClick={() => loginMode ? setLoginMode(false) : null}
                        animate={{
                            opacity: loginMode ? .7 : 1,
                            scale: loginMode ? .92 : 1,
                            cursor: loginMode ? 'pointer' : 'not-allowed',
                            transition: {
                                duration: .5,
                                ease: 'backInOut'
                            }
                        }}
                    >
                        <span>Sign-up</span>
                    </motion.div>
                    <motion.div className='py-3 btn px-4 rounded-md transition-all duration-300 ease-in' onClick={() => !loginMode ? setLoginMode(true) : null}
                        animate={{
                            opacity: !loginMode ? .7 : 1,
                            scale: !loginMode ? .92 : 1,
                            cursor: !loginMode ? 'pointer' : 'not-allowed',
                            transition: {
                                duration: .5,
                                ease: 'backInOut'
                            }
                        }}
                    >
                        <span>Login</span>
                    </motion.div>
                </div>
                <div className='h-full'>
                    <motion.div
                        key={loginMode ? 'login' : 'signup'}
                        className="grid size-full overflow-hidden rounded-md border-[1px]"
                    >
                        <div className="sm:grid sm:grid-cols-2">
                            {/* Left Side */}
                            <motion.div className="relative overflow-hidden size-full sm:outline"
                                animate={
                                    screenWidth > 640 ? false : { y: !loginMode ? ['-100%', 0] : [0, '-100%'] }
                                }
                            >
                                {/* Signup Fields */}
                                <motion.div
                                    className="absolute inset-0 size-full p-4 flex flex-col justify-center gap-4 overflow-hidden"
                                    initial={{ x: '0%' }}
                                    animate={screenWidth > 640 ? { x: loginMode ? [0, "100%"] : ["100%", 0], transition: { duration: 1, ease: "anticipate" } } : false}
                                >
                                    <motion.input type="text" placeholder="Username" className="py-2 px-4 rounded-sm excluse w-full border-[2px] exclusive" />
                                    <motion.input type="email" placeholder="Email" className="py-2 px-4 rounded-sm excluse w-full border-[2px] exclusive" />
                                    <motion.input type="password" placeholder="Password" className="py-2 px-4 rounded-sm excluse w-full border-[2px] exclusive" />
                                    <motion.input type="submit" className="btn excluse exlusive inline-block w-full text-center cursor-pointer rounded-sm border-[rgba(0,0,0,.6)]" value={"Submit"} />
                                </motion.div>

                                {/* Login Image */}
                                <motion.div
                                    className="absolute inset-0 size-full hidden sm:grid place-items-center overflow-hidden"
                                    initial={{ x: '0%' }}
                                    animate={screenWidth > 640 ? { x: !loginMode ? [0, "100%"] : ["100%", 0], transition: { duration: 1, ease: "anticipate" } } : false}
                                >
                                    <img src="./images/sign-in.svg" className="select-none pointer-events-none" alt="sign-in" />
                                </motion.div>
                            </motion.div>

                            {/* Right Side */}
                            <motion.div className="relative overflow-hidden size-full sm:outline"
                                animate={
                                    screenWidth > 640 ? false : { y: !loginMode ? ['-100%', 0] : [0, '-100%'] }
                                }
                            >
                                {/* Login Fields */}
                                <motion.div
                                    className="absolute inset-0 size-full p-4 flex flex-col justify-center gap-4 overflow-hidden"
                                    initial={{ x: '0%' }}
                                    animate={screenWidth > 640 ? { x: loginMode ? ["-100%", 0] : [0, "-100%"], transition: { duration: 1, ease: "anticipate" } } : false}
                                >
                                    <p className='py-2 px-4 outline outline-dashed rounded-md'>Enter Your Credentials</p>
                                    <motion.input type="email" placeholder="Email" className="py-2 px-4 rounded-sm excluse w-full border-[2px] exclusive" />
                                    <motion.input type="password" placeholder="Password" className="py-2 px-4 rounded-sm excluse w-full border-[2px] exclusive" />
                                    <motion.input type="submit" className="btn excluse exclusive inline-block w-full text-center cursor-pointer rounded-sm border-[rgba(0,0,0,.6)]" value={"Submit"} />
                                </motion.div>

                                {/* Signup Image */}
                                <motion.div
                                    className="absolute inset-0 size-full hidden sm:grid place-items-center overflow-hidden"
                                    initial={{ x: '0%' }}
                                    animate={screenWidth > 640 ? { x: loginMode ? [0, "-100%"] : ["-100%", 0], transition: { duration: 1, ease: "anticipate" } } : false}
                                >
                                    <img src="./images/sign-in.svg" className="select-none pointer-events-none" alt="sign-in" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Login
