import React from 'react'
import logo from '../../src/assets/logo.png'
const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer