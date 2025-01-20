  import React from 'react'
  import Dark from './Dark'

  const NavBar = () => {
    return (
      <div className='flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center justify-between p-4 rounded-lg bg-black'>
        <p className='lg:text-3xl text-2xl text-center'><span><a href="/">Nischal</a></span></p>
        <ul className='flex gap-12'>
          <li><a href="/">Home</a></li>
          <li><a href="#Services">Services</a></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Dark/>
      </div>
    )
  }

  export default NavBar
