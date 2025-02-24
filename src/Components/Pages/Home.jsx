import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='lg:h-dvh h-auto lg:-py-0 gap-5 sm:gap-0 md:py-5 sm:py-10 py-12 flex flex-wrap items-center relative'>
            <div className='flex h-full w-full mt-auto lg:order-1 order-2 lg:w-1/2 items-center'>
                <div className='space-y-4 lg:w-auto w-full'>
                    <p className='text-[clamp(1.5rem,1.0776rem_+_2.4138vw,3.25rem)] max-w-[500px] leading-[1.2]'>Find a Job with Your Interests and Abilities</p>
                    <p className='max-w-[500px] text-[clamp(.75rem,.6897rem_+_.3448vw,1rem)] font-[300] leading-[1.6]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt amet quae maxime modi! Aliquid obcaecati laborum ducimus eius incidunt laboriosam.</p>
                    <div className='flex w-full sm:flex-row flex-col gap-3'>
                        <Link
                            to='/'
                            className='react-link w-full inline-block text-center sm:text-base text-xs py-2 px-4 rounded-md transition-all duration-300 ease-in special-link'
                        >
                            Get Started
                        </Link>
                        <Link
                            to='/'
                            className='react-link w-full inline-block text-center sm:text-base text-xs py-2 px-4 rounded-md transition-all duration-300 ease-in'
                        >
                            Know More
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:order-2 order-1 grid place-items-center'>
                <img className='lg:size-full md:size-8/10 object-contain object-center' src="./images/hero-1.svg" alt="img" />
            </div>
        </section>
    )
}

export default Home
