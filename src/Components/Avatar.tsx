"use client"
import React, { useState, useEffect } from 'react';

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
        <div>
            <img
                src="portfolio_me.png"
                alt="My photo"
                className={`w-44 lg:w-80 lg:rounded-[80px] lg:absolute lg:-top-20 lg:right-60 transition-all ease-in-out ${isScrolled ? 'lg:z-0' : 'lg:z-30'} `}
            />
        </div>
    );
};

export default Avatar;

