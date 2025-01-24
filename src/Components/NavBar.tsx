  "use client"
  
import React, { useEffect, useState } from 'react'
import Dark from './Dark'
import Link from 'next/link'

const NavBar = () => {

  const [scrolled, setScrolled] = useState(0)
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(()=>{
    
    const handleScrolled=()=>{
      const scrolledNow = window.scrollY
      
      if (scrolledNow < scrolled){
        setDirection("down")
      }
      else {
        setDirection("up")
      }
  
      setScrolled(scrolledNow)
    }

    window.addEventListener("scroll", handleScrolled)
  
  },[scrolled])




  return (
    <div className={`w-screen flex lg:flex-row flex-col gap-4 lg:gap-0 lg:items-center justify-between p-4 rounded-lg bg-black transition-all duration-300 ease-in-out ${(direction === "down") ? "opacity-100 translate-y-0" :"opacity-0 -translate-y-32"}`}>
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
