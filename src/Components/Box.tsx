// "use client"

// import React, { useState, useRef, useEffect } from 'react';

// interface BoxProps {
//   id: number;
//   heading?: string;
//   content?: string;
// }

// const Box: React.FC<BoxProps> = ({ id, heading, content }) => {
//   const boxRef = useRef<HTMLDivElement>(null);
//   const [isLeftmost, setIsLeftmost] = useState(false);
//   const [isRightmost, setIsRightmost] = useState(false);

//   // Function to calculate the position of the box
//   const calculatePosition = () => {
//     if (boxRef.current) {
//       const container = boxRef.current.parentElement;
//       if (!container) return;

//       const scrollLeft = container.scrollLeft;
//       const containerWidth = container.clientWidth;

//       const boxLeft = boxRef.current.offsetLeft;
//       const boxRight = boxLeft + boxRef.current.offsetWidth;

//       return { isLeft: boxLeft >= scrollLeft, isRight: boxRight <= scrollLeft + containerWidth, boxLeft, boxRight };
//     }
//     return { isLeft: false, isRight: false, boxLeft: 0, boxRight: 0 };
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = boxRef.current?.parentElement;
//       if (!container) return;

//       const containerWidth = container.clientWidth;
//       const scrollLeft = container.scrollLeft;

//       // Loop through all the boxes inside the container
//       const positions = Array.from(container.children).map((child) => {
//         const box = child as HTMLElement;
//         const boxLeft = box.offsetLeft;
//         const boxRight = boxLeft + box.offsetWidth;
//         return { box, boxLeft, boxRight };
//       });

//       // Filter boxes that are within the visible range
//       const visibleBoxes = positions.filter(({ boxLeft, boxRight }) => boxRight > scrollLeft && boxLeft < scrollLeft + containerWidth);

//       // Determine leftmost and rightmost boxes from the visible ones
//       const leftmostBox = visibleBoxes.reduce((left, current) => (current.boxLeft < left.boxLeft ? current : left), visibleBoxes[0]);
//       const rightmostBox = visibleBoxes.reduce((right, current) => (current.boxRight > right.boxRight ? current : right), visibleBoxes[0]);

//       // Set the state to indicate if this box is the leftmost or rightmost within the visible area
//       const { boxLeft, boxRight }= calculatePosition();
//       setIsLeftmost(boxLeft === leftmostBox.boxLeft);
//       setIsRightmost(boxRight === rightmostBox.boxRight);
//     };

//     const container = boxRef.current?.parentElement;
//     container?.addEventListener('scroll', handleScroll);

//     // Initial check
//     handleScroll();

//     // Clean up on unmount
//     return () => {
//       container?.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   function scrollNow(x: boolean) {
//     if (boxRef.current) {
//       const container = boxRef.current.parentElement;
//       if (!container) return;

//       const boxWidth = boxRef.current.offsetWidth;
//       const scrollAmount = x ? -boxWidth : boxWidth;

//       container?.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
//     }
//   }

//   return (
//     <div
//       ref={boxRef}
//       className={`border w-96 rounded-t-3xl border-purple-800 transform transition-all duration-300 ease-in-out hover:-translate-y-5 hover:scale-105 lg:hover:scale-110 hover:mx-2 lg:hover:mx-3 hover:shadow-[0_0px_10px_rgba(76,29,149,0.8)] ${isLeftmost ? 'border-green-500' : ''} ${isRightmost ? 'border-red-500' : ''}`}
//       onMouseEnter={() => {
//         if (isLeftmost) {
//           console.log("scroll left");
//           scrollNow(true); // Scroll left
//         }
//         if (isRightmost) {
//           console.log("scroll right");
//           scrollNow(false); // Scroll right
//         }
//       }}
//     >
//       <h2 className="text-3xl m-2 p-4">{id}. {heading}</h2>
//       <p className="text-md m-2 p-4">
//         {content}
//       </p>
//     </div>
//   );
// };

// export default Box;

import React from 'react'

interface BoxProps {
  id: number;
  heading?: string;
  content?: string;
}

const Box: React.FC<BoxProps> = ({ id, heading, content }) => {
  return (
    <div
      className={`border w-96 rounded-t-3xl border-purple-800 transform transition-all duration-300 ease-in-out hover:-translate-y-5 hover:scale-105 lg:hover:scale-110 hover:mx-2 lg:hover:mx-3 hover:shadow-[0_0px_10px_rgba(76,29,149,0.8)]`}
    >
      <h2 className="text-3xl m-2 p-4">{id}. {heading}</h2>
      <p className="text-md m-2 p-4">
        {content}
      </p>
    </div>
  )
}

export default Box

