import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../src/assets/logo.png'
import { FaAlignJustify } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  };
  return (
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
  )
}

export default Navbar