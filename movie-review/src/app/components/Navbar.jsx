
import React from 'react';
import './Navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaSearch } from 'react-icons/fa';
// import { TbLogout } from "react-icons/tb";

function Navbar() {

  return (
    <div className='navbar-parent'>
        <div className='navbar-container'>
            <div>
              <Link href='/'>
                <Image src='/navbar-icon.png' alt='Worth-a-Share' width={100} height={100} />
              </Link>
            </div>
            {/* Search Bar Section */}
            <div className="search-bar-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search your reviews here..."
              />
            </div>

            {/* Profile Section */}
            <div className='profile-section'>
              <FaUser className="icon" />
              {/* <TbLogout className="icon logout-icon" /> Logout Icon */}
              <div className='login'>
                Logout/Signup
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar