"use client"

import React, { useEffect, useState } from 'react'

const NewDate = () => {

    const [greeting, setGreeting] = useState("")


    useEffect(()=>{
        const getGreeting = (): string => {
            const currentHour = new Date().getHours();
        
            if (currentHour >= 5 && currentHour < 12) {
              return 'Good Morning';
            } else if (currentHour >= 12 && currentHour < 17) {
              return 'Good Afternoon';
            } else if (currentHour >= 17 && currentHour < 21) {
              return 'Good Evening';
            } else {
              return 'Good Night';
            }
          };
        setGreeting(getGreeting());
    },[]);

       
  return (
    <div>
        <p className="text-3xl md:text-4xl lg:text-5xl">{greeting},</p>
    </div>
  )
}

export default NewDate
