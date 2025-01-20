  import React from 'react'
  import Dark from './Dark'
  import Link from 'next/link'

  const NavBar = () => {
    return (
      <div className='flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center justify-between p-4 rounded-lg bg-black'>
        <p className='lg:text-3xl text-2xl text-center'><span><Link href="/">Nischal</Link></span></p>
        <ul className='flex gap-12'>
          <li><Link href="/">Home</Link></li>
          <li><a href="#Services">Services</a></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Dark/>
      </div>
    )
  }

  export default NavBar
