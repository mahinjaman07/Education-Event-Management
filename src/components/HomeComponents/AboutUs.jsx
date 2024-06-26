import React, { useEffect } from 'react';
import getInspired from '../../../public/images/icon/inspire.png'
import OtherInspired from '../../../public/images/icon/other_inspire.png'
import aboutMainImg from '../../../public//images/about-img/home-about-img.png'
import aboutSubImg1 from '../../../public//images/about-img//about_sub1.png'
import aboutSubImg2 from '../../../public//images/about-img//about_sub2.png'
import aboutSubImg3 from '../../../public//images/about-img//about_sub3.png'
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className='bg-orange-50' data-aos="zoom-in-left">
            <div className='grid grid-cols-1 p-5 lg:grid-cols-1 xl:grid-cols-2 md:w-8/12 gap-14 mx-auto py-20 items-center'>

                <div className='relative'>
                    <img className='relative z-20' src={aboutMainImg} alt="" />
                    <img className='w-40 z-30 hidden md:block lg:w-52 -top-10 right-0 md: leftToRight absolute md:top-0 md:right-8' src={aboutSubImg1} alt="" />
                    <img className='w-40 z-30 hidden md:block lg:w-52 xl:w-60 bottom-0 leftToRight absolute md:-bottom-7 left-8 lg:left-14' src={aboutSubImg2} alt="" />
                    <img className='absolute top-0 -left-14 leftToRight ' src={aboutSubImg3} alt="" />
                </div>
                <div>
                    <h4 className='text-[#fd6d4b] text-lg font-semibold'>ABOUT US</h4>
                    <h1 style={{ lineHeight: '60px' }} className='text-xl  md:text-4xl lg:text-5xl font-bold mb-4'>Here We Are Ready To Give All Our Best At 100 %</h1>
                    <p className='leading-loose text-xl mb-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex gap-5 items-center mb-4'>
                        <img className='p-5 bg-slate-200 rounded-full' src={getInspired} alt="Get Inspired" />
                        <div className='flex flex-col md:w-9/12'>
                            <h4 className='text-2xl font-bold'>Get Inspired</h4>
                            <p className='text-xl leading-relaxed '>Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center md:w-10/12 mb-5'>
                        <img className='p-5 bg-slate-200 rounded-full' src={OtherInspired} alt='Other Inspired' />
                        <div className='flex flex-col'>
                            <h4 className='text-2xl font-bold'>Others Inspired</h4>
                            <p className='text-xl leading-relaxed '>Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore</p>
                        </div>
                    </div>
                    <button className=' primary-btn '><NavLink to={'/about'}>More About Us</NavLink></button>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;