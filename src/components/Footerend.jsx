import React from 'react'
import {  FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footerend = () => {
    const getYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
      }
  return (
    <>
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

export default Footerend