"use client"

import React, {useState } from 'react'
import { Moon, Sun } from 'lucide-react';

const Dark = () => {
    const [isDark, setIsDark] = useState<boolean>(true)

    const changeTheme = ()=>{
        setIsDark((prev)=> !prev)
    }

  return (
    <button onClick={changeTheme} className={`rounded-[20px] p-2 hidden lg:block`}>
      <div className={`transition-transform duration-300 hover:scale-105 flex justify-center ${isDark?'-rotate-45':'rotate-360'}`} ><span>{isDark?<Sun className="h-6 w-6" />:<Moon className="h-6 w-6" />}</span></div>
    </button>
  )
}

export default Dark
