  import React from 'react'
  import Dark from './Dark'
  import Link from 'next/link'

  const NavBar = () => {
    return (
      <div className='flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center justify-between p-4 rounded-lg bg-black'>
        <p className='lg:text-3xl text-2xl text-center'><span><Link href="/">Nischal</Link></span></p>
        <ul className='flex gap-12'>
          <li className='hover:scale-105 hover:text-[#CAFA53]' ><Link href="/">Home</Link></li>
          <li className='hover:scale-105 hover:text-[#CAFA53]' ><a href="#Services">Services</a></li>
          <li className='hover:scale-105 hover:text-[#CAFA53]' >About</li>
          <li className='hover:scale-105 hover:text-[#CAFA53]' >Contact</li>
        </ul>
        <Dark/>
      </div>
    )
  }

  export default NavBar
