import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import businessabout from '../../assets/businessabout.png'
import business from '../../assets/business.jpg'
import { FaAlignJustify } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'
import Footerend from '../../components/Footerend'
import TextChange from '../../components/Textchange'
const Business = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <>

            <div className='flex justify-between items-center h-20 px-4'>
                <div >
                    <img src={logo} alt='logo' height={50} width={150} />
                </div>
                <ul className='md:flex hidden '>
                    <li className='p-4' >
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className='p-4'>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                {/* Hamberger */}
                <div onClick={handleNav} className='md:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} /> : <FaAlignJustify size={20} />}

                </div>
                {/* mobile menu */}
                <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-nav px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                    <ul>
                        <img src={logo} alt='logo' height={50} width={150} />
                        <li className='p-4' >
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className='p-4 '>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className='p-4 '>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* banner     */}
            <div className='grid grid-col sm:grid-cols-2 mx-14 '>

                <div className='flex flex-col justify-center content-center '>
                    <h1 className='text-3xl text-left font-bold'>Upscale, Smart and Easy</h1>
                    <p>We assist you whether you are an exceptional talent or a company in need of one.</p>
                </div>
                <div className='relative flex justify-center'>
                <div><img src={business} alt='business' className='h-[46vh] min-h-[460px] rounded-[40px] ' /></div>
                    <div className='absolute bg-primary w-[370px] z-[-1] rounded-[40px] origin-bottom-left min-h-[460px] h-[46vh] top-0 rotate-6 '></div>
                    <div className='absolute bg-light w-[370px] z-[-2] rounded-[40px] origin-bottom-left min-h-[460px] h-[46vh] top-0 rotate-12 '></div>
                    <div className='absolute'>

                        <div className="w-full max-w-fit p-4 bg-white drop-shadow-lg rounded-[20px] shadow-md sm:p-2 ">
                            <h1 className='px-6'>Upscale Business</h1>

                            <span className=''><TextChange/></span>

                        </div>

                    </div>
                </div>


            </div>

            {/* business about */}
            <div className='grid  sm:grid-cols-2 px-14'>
                <div className='px-2 grd-col'>
                    <img src={businessabout} alt="businessabout"></img>

                </div>

                <div className="col content-center flex flex-col justify-center ">
                    <span className="text-xl text-hover font-medium">Our mission</span>
                    <h1 className="text-4xl text-left ">
                        Who are we to business ?
                    </h1>
                    <Loading />
                    <p className='text-left my-6'>There are two sides to every story when it comes to employment. Employers say, "Good help is hard to come by,"
                        while job seekers say, "I can't seem to find a decent job anywhere." Finding suitable work and workers is a
                        difficult process regardless of which side of the coin you are on.</p>
                    If you're looking for work, a single job posting can attract hundreds of applicants. It takes time
                    to sort through them to find a good fit. A job seeker, on the other hand, may feel as if he or she
                    is sending resumes into the Internet's black hole, never to hear back.
                    <p className='text-left my-3'>How can hiring procedures be made more efficient for employers and job seekers?</p>
                    <p className='text-left my-3'>Many people use an employment agency to speed up the process. A company hires an employment agency
                        to help with its staffing requirements. Employment services assist people in finding work in a
                        variety of career fields, from temporary to full-time positions. Whether a company needs a manager,
                        a carpenter, a nurse, or an administrative assistant, an employment service can help.
                        Similarly, the hassle of hiring qualified candidates, from screening to onboarding, is far more taxing
                        on businesses than we realize. Companies struggle to find a good fit for their team in the first place,
                        and hiring an entire team for a specific project is even more difficult.</p>
                </div>
            </div>


            {/* -------------------- packages ------------------------- */}






            <div>
                <div id="pricing" className="relative z-20 overflow-hidden bg-white pt-10 pb-12 lg:pt-[120px] lg:pb-[90px]">
                    <div className="px-14 my-9">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
                                    <span className="mb-2 block text-lg font-semibold text-primary">
                                        Pricing Table
                                    </span>
                                    <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                        Package Plan
                                    </h2>
                                    <p className="text-lg leading-relaxed text-body-color sm:text-xl sm:leading-relaxed">
                                        There are many variations of passages of Lorem Ipsum available
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center">
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <div
                                    className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                                    data-wow-delay=".15s
              ">
                                    <span
                                        className="mb-5 inline-block rounded-full border border-white bg-white py-2 px-6 text-base font-semibold uppercase text-primary">
                                        PROJECT
                                    </span>
                                    <div className="mb-10">
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Basic Contract
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Agile Development Type
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Chat and Email Support
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Performance Tracking
                                        </p>


                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Availability per Schedule
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Monthly Billing (As per Milestones)
                                        </p>

                                    </div>

                                    <div className="w-full">
                                        <a href=""
                                            className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                                            Purchase Now
                                        </a>
                                    </div>
                                    <span className="absolute left-0 bottom-0 z-[-1] block h-14 w-14 rounded-tr-full bg-primary">
                                    </span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <div
                                    className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl bg-primary bg-gradient-to-b from-primary  py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                                    data-wow-delay=".1s
              ">
                                    <span
                                        className="mb-5 inline-block rounded-full border border-white bg-white py-2 px-6 text-base font-semibold uppercase text-primary">
                                        PARTNERSHIP
                                    </span>
                                    <span className="mb-2 block text-base font-medium uppercase text-white">
                                        Salary Packages Starting From
                                    </span>
                                    <h2 className="mb-9 text-[28px] font-semibold text-white">
                                        20000$ per Month
                                    </h2>














                                    <div className="mb-10">
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            Bulk Hiring
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            Working Station All UI components
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            Operation Support
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            Weekly PSR Reports
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            Candidate Selection Pool
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-white">
                                            24 Hours of Project Support
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <a href=""
                                            className="inline-block rounded-full border border-white bg-white py-4 px-11 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:border-dark hover:bg-dark hover:text-white">
                                            Purchase Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3">
                                <div
                                    className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 text-center shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
                                    data-wow-delay=".15s
              ">
                                    <span
                                        className="mb-5 inline-block rounded-full border border-white bg-white py-2 px-6 text-base font-semibold uppercase text-primary">
                                        PER HIRE
                                    </span>


                                    <div className="mb-10">
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Negotiable Contract
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Help Desk Support
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Operation Support
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Communication
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Monthly Billing
                                        </p>
                                        <p className="mb-1 text-base font-medium leading-loose text-body-color">
                                            Candidate Selection Pool
                                        </p>

                                    </div>
                                    <div className="w-full">
                                        <a href=''
                                            className="inline-block rounded-full border border-[#D4DEFF] bg-transparent py-4 px-11 text-center text-base font-medium text-primary transition duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white">
                                            Purchase Now
                                        </a>
                                    </div>

                                    <span className="absolute right-0 top-0 z-[-1] block h-14 w-14 rounded-bl-full bg-primary">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
            <Footerend />
        </>
    )
}

export default Business