import React from 'react'
import './Login.css'
import Link from 'next/link';

function NewHere() {
  return (
    <div className='newhere-container'>
      <div className='nh-title'>
        New Here?
      </div>
      <div className='nh-subtitle'>
        Sign up and discover as well as<br />share your own opinions. Be a part<br />of this
        great community!
      </div>
      <div className='justify-center'>
        <Link href='/signup'>
          <div className='signup-button'>
            Sign up
          </div>
        </Link>
      </div>
    </div>
  )
}

export default NewHere