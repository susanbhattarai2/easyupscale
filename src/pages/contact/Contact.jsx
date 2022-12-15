import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Loading from '../../components/Loading.jsx'
import { FaAlignJustify,FaMapMarkerAlt,FaRegEnvelope } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import {  FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Contact = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  };
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
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
                  <h1 className="text-4xl font-medium text-white font-fam">Our door is always open for a good cup of coffee. </h1>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* contact */}
        <div>
          <section id="contact" className="relative py-4 md:py-[40px] px-14">
            <div className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#e5ffff] lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4">
              <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                  <div className="ud-contact-content-wrapper">
                    <div className="ud-contact-title mb-12 lg:mb-[150px]">
                      <span className="mb-5 text-base font-semibold text-primary">
                        CONTACT US
                      </span>
                      <h2 className="text-[35px] font-semibold text-dark">
                        {/* <!-- Let's talk about <br /> --> */}
                        Love to hear from you!
                      </h2>
                      <span><Loading /></span>
                    </div>
                    <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                      <div className="mb-8 flex w-[330px] max-w-full">
                        <div className="mr-6 text-[32px] text-primary flex items-center">
                          <FaMapMarkerAlt color="#008080" />
                          
                        </div>
                        <div>
                          <h5 className="mb-6 text-lg font-semibold">Our Location</h5>
                          <p className="text-base text-body-color">
                            Yala Sadak, Kumaripati, Lalitpur Nepal
                          </p>
                        </div>
                      </div>
                      <div className="mb-8 flex w-[330px] max-w-full">
                        <div className="mr-6 text-[32px] text-primary flex items-center">
                          <FaRegEnvelope color="#008080" />
                          
                        </div>
                        <div>
                          <h5 className="mb-6 text-lg font-semibold">How Can We Help?</h5>
                          <p className="text-base text-body-color">info@easyupscale.com</p>
                          {/* <!-- <p className="text-base text-body-color">
                    contact@yourdomain.com
                  </p> --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-5/12 xl:w-4/12 drop-shadow-xl">
                  <div id="contactform" className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]" data-wow-delay=".2s
              ">
                    <h3 className="mb-4 theme-txt-color font-semibold text-[16px]">
                      Send us a Message
                    </h3>

                    <form method="post" onsubmit="return validate();">
                      <input type="hidden" name="csrfmiddlewaretoken" value="mvMnmvjRNmKDH5d8hFNtHOqIWHLKhGxCWBTxo4ncZ0yPKaMiBaJbLMDXvNXNoH6S" />
                      <div className="mb-6">
                        <label for="fullname" className="block text-xs text-dark">Full Name <span >*</span></label>
                        <input type="text" name="fullname" id="fullname" placeholder="John Doe" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="email" className="block text-xs text-dark">Email <span >*</span></label>
                        <input type="email" name="email" id="email" placeholder="example@yourmail.com" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="phone" className="block text-xs text-dark">Phone <span >*</span></label>
                        <input type="text" name="phone" id="phone" placeholder="+977 123456789" className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required="" />
                      </div>
                      <div className="mb-6">
                        <label for="message" className="block text-xs text-dark">Message <span >*</span></label>
                        <textarea name="message" id="message" rows="1" placeholder="Your Message Here" className="w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none" required=""></textarea>
                      </div>
                      <div id="error_message"></div>

                      <div className="mb-0">
                        <button type="submit" className="inline-flex items-center justify-center rounded theme-color py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>





        
        {/* footer */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 mt-15 px-14 py-10 bg-primary text-white'>
          
        <div className='flex flex-col items-center'>
          <img src={logo} alt='footerLogo' />
          <p>We create digital experiences for brands and companies by using technology. </p>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='py-4'>About Us</h1>
          <ul >
            <li className='py-1'>Home</li>
            <li className='py-1'>Service</li>
            <li className='py-1'>About</li>
            <li className='py-1'>Packages</li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h1 className='py-4'>Services</h1>
          <ul >
            <li className='py-1'>Upload your CV</li>
            <li className='py-1'>How it works</li>
            <li className='py-1'>Privacy policy</li>
            <li className='py-1'>Terms of Service</li>
          </ul>
        </div>
        </div>
        
        
        {/* footerend */}
        <div className="flex items-start justify-between bg-hover text-white py-2 px-5">
          <div className="">Copyright &copy; {getYear()}. Easy Upscale</div>
          <div className="flex">
            <a href='#facebook' className="px-1"><FaFacebook size={22} /></a>
            <a href='#instagram' className="px-1"><FaInstagramSquare size={22} /></a>
            <a href='#Linkdein' className="px-1"><FaLinkedin size={22} /></a>
            <a href='#twitter' className="px-1"><FaTwitterSquare size={22} /></a>
          </div>
        </div>
    </>
  )
}
export default Contact;    
