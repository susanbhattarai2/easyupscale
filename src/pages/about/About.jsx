import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Loading from '../../components/Loading.jsx'
import { FaAlignJustify } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.jpg'
import Footer from '../../components/Footer'
import Footerend from '../../components/Footerend'
const About = () => {
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
          <div onClick={handleNav} className='md:hidden z-20'>
            {nav ? <AiOutlineClose size={20} /> : <FaAlignJustify size={20} />}

          </div>
          {/* mobile menu */}
          <div onClick={handleNav} className={nav ? 'absolute z-10 left-0 top-0 w-full bg-nav px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
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
        {/* banner */}
        <div className="relative  overflow-hidden theme-color pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                <div className="text-center">
                  <h1 className="text-4xl font-medium text-white font-fam">About Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 my-10 px-14 h-full'>
          <div className='about-image1'>
            <img src={about1} alt='about1' />
          </div>

          <div className="col content-center flex flex-col justify-center">
            <span className="text-xl text-primary font-medium">Our story</span>
            <h1 className="text-3xl text-left">
              Back Story behind EASY UPSCALE
            </h1>
            <Loading />
            <p className="text-left my-6">
              There are two sides to every story when it comes to employment. Employers say, "Good help is hard to come by,"
              while job seekers say, "I can't seem to find a decent job anywhere." Finding suitable work and workers is a
              difficult process regardless of which side of the coin you are on.If you're looking for work, a single job
              posting can attract hundreds of applicants. It takes time to sort through them to find a good fit. A job seeker,
              on the other hand, may feel as if he or she is sending resumes into the Internet's black hole, never to hear back.
            </p>
            <p className="text-left my-2">
              How can hiring procedures be made more efficient for employers and job seekers?
            </p>
            <p className="text-left my-6">
              Many people use an employment agency to speed up the process. A company hires an employment agency to help with
              its staffing requirements. Employment services assist people in finding work in a variety of career fields, from
              temporary to full-time positions. Whether a company needs a manager, a carpenter, a nurse, or an administrative
              assistant, an employment service can help.Similarly, the hassle of hiring qualified candidates, from screening to
              onboarding, is far more taxing on businesses than we realize. Companies struggle to find a good fit for their team
              in the first place, and hiring an entire team for a specific project is even more difficult.
            </p>
            
            <div className="">
              <button className='border border-primary px-4 py-2 rounded mx-1 text-white bg-primary hover:bg-hover'>Learn More</button>
            </div>
          </div>



        </div>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 my-10 pl-14 h-full bg-light'>
          
          <div className="col content-center flex flex-col justify-center ">
            <span className="text-xl text-hover font-medium">Our mission</span>
            <h1 className="text-3xl text-left ">
              Mission of EASY UPSCALE
            </h1>
            <div><Loading /></div>
            <p className="text-left my-6 ">
              Easy Upscale's main mission is to ensure the smooth operation of the international job market by providing high-quality
              job training, employment, labor market information, and income maintenance services.
            </p>
            <p className="text-left my-2 ">
              Our goal is to assist people and families who are working toward their goals in finding paths to financial liberty.
              Easy Upscale will deliver the appropriate programs that will effectively run programs with the primary goals of
              increased employment opportunities and corporate profitability.
            </p>
            <p className="text-left my-6 ">
              In addition, we intend to bridge the gap between candidates and companies in order to provide candidates with appropriate
              knowledge while also ensuring that the company is a good fit for their cultural values. With the goal of providing a
              whole team to various companies looking to scale their team with the click of a finger. While massive hiring is a hassle
              for any company, we strive to make the process as simple as possible by providing the right fit as well as the numbers
              required for the team. You can select as many candidates as you want from our pool, and all you have to do is ensure that
              you are focusing on the primary work that the company was supposed to do.
            </p>

          </div>

          <div className=''><img src={about2} alt='about2' /></div>
        </div>
        {/* footer */}
        <Footer />
        
        
        {/* footerend */}
        <Footerend /> 
      </>
      )
}

      export default About