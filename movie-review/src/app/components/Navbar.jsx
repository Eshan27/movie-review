import React from 'react';
import './Navbar.css';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='navbar-parent'>
        <div>
            <Image src='/worth-a-share-logo.jpg' alt='Worth-a-Share' width={200} height={200} />
        </div>
    </div>
  )
}

export default Navbar