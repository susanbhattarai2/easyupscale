import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from 'react'

export const navbar = () => {
  return (
    <nav>

        <Link to='/home'>Home</Link>
        <Link to='/business'>Business</Link>
        <Link to='/client'>Client</Link>


    </nav>
  )
}
