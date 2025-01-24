"use client"

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react"; // or your preferred icons
import Box from "./Box";

const Contain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 260; // Adjust this value as needed
      if (direction === "left") {
        containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };
  
  let count = 1;

  const boxes = [
    {heading: 'Frontend Development', content:"With a strong foundation in frontend technologies, I have successfully developed and deployed several React and Next.js projects, ensuring responsive and high-performance user experiences." },
    {heading: 'Backend Development', content:"With a strong foundation in backend technologies, I have successfully developed and deployed several Node.js projects using mongoDB and express, ensuring responsive and high-performance user experiences." },
    {heading: 'Frontend Development', content:"With a strong foundation in frontend technologies, I have successfully developed and deployed several React and Next.js projects, ensuring responsive and high-performance user experiences." },
    {heading: 'Backend Development', content:"With a strong foundation in backend technologies, I have successfully developed and deployed several Node.js projects using mongoDB and express, ensuring responsive and high-performance user experiences." },
    {heading: 'Frontend Development', content:"With a strong foundation in frontend technologies, I have successfully developed and deployed several React and Next.js projects, ensuring responsive and high-performance user experiences." },
    {heading: 'Backend Development', content:"With a strong foundation in backend technologies, I have successfully developed and deployed several Node.js projects using mongoDB and express, ensuring responsive and high-performance user experiences." },
    {heading: 'Frontend Development', content:"With a strong foundation in frontend technologies, I have successfully developed and deployed several React and Next.js projects, ensuring responsive and high-performance user experiences." },
    {heading: 'Backend Development', content:"With a strong foundation in backend technologies, I have successfully developed and deployed several Node.js projects using mongoDB and express, ensuring responsive and high-performance user experiences." },
  ];

  return (
    <div id="Services" className="flex flex-col w-[80%] gap-2 overflow-visible">
      <p className="text-center text-3xl"><span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Services</span></p>
      <div className="flex gap-2 items-center">
        <button className="bg-slate-700 bg-opacity-35 rounded-3xl w-10 hidden lg:block" onClick={() => scrollContainer("left")}>
          <ArrowLeft />
        </button>
        <div ref={containerRef} className="flex gap-2 pt-10 h-max lg:gap-6 overflow-x-scroll overflow-visible scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500">
          {boxes.map((box) => (
            <Box key={count++} id={count} heading={box.heading} content={box.content} />
          ))}
        </div>
        <button className="bg-slate-700 bg-opacity-35 rounded-3xl w-10 hidden lg:block" onClick={() => scrollContainer("right")}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Contain