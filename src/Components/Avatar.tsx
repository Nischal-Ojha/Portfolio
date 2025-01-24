"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";


const Avatar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY !== 0);
        };
        // Set initial scroll state
        handleScroll();
        
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-44 flex flex-col items-center order-first lg:w-[25%] lg:order-last lg:rounded-[80px] lg:absolute lg:-top-16 lg:right-52 transition-all ease-in-out ${isScrolled ? 'lg:z-0' : 'lg:z-30'} `}>
            <Image
                src="/portfolio_me.png"
                alt="My photo"
                width={400}
                height={400}
            />
        </div>
    );
};

export default Avatar;

