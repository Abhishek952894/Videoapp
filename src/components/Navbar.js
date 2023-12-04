import React from 'react'
import logo from '../assets/logo.jpeg'

function Navbar() {
  return (
    <div className=''>
        <img src='{logo}'alt=''/>
        <div className=''>
            <ul className='text-white font-bold flex items-center gap-4'>
                <li>About-Us</li>
                <li> Product</li>
                <li>Blogs</li>
                
            </ul>
        </div>
    </div>
   
  )
}

export default Navbar