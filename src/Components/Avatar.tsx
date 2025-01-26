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
        <div className={`w-44 flex flex-col items-center order-first 
                        lg:w-[30%] lg:h-[30%] lg:order-last lg:rounded-[80px] lg:absolute lg:-top-16 lg:right-[5%]
                        md:w-[35%] md:h-[35%] md:order-last md:rounded-[80px] md:absolute md:-top-16 md:-right-[1%]
                        transition-all ease-in-out ${isScrolled ? 'lg:z-0 md:z-0' : 'lg:z-30 md:z-30'} `}>
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

