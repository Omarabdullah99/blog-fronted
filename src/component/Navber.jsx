import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <header className='bg-white border-b-2'>
        <div className='navbar'>
            <div className="logo">
                <p>Omar Abdullah</p>
            </div>
            <div className="nav-right">
                <p></p>
                <Link to={"/addblog"} >Add Blog</Link>
            </div>
        </div>

    </header>
  )
}

export default Navber