import  Box  from "../Components/Box";
import Avatar from "../Components/Avatar";

export default function Home() {
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
   
  return (
    <div className="min-h-screen p-4 m-4 mt-28 font-[family-name:var(--font-geist-sans)] relative">
    <main className="flex flex-col gap-8 items-center row-start-2 lg:items-center w-full">

      <div className="Home lg:w-[80%] flex flex-col lg:flex-row items-center">
        <div className="order-first lg:order-last">
          <Avatar />
        </div>          
        <div className="w-full lg:w-[50%] my-8 lg:ml-20 text-center lg:text-left">
          <p className="text-3xl lg:text-5xl">{getGreeting()},</p>
          <p className="text-2xl lg:text-3xl my-5">Hello I&#39;m Nischal <span>Ojha</span></p>
          <p className="text-lg lg:text-2xl text-justify lg:text-left">I the <span>unwilling</span>, led by the <span>unknowing</span>, am doing the <span>impossible</span> for the <span>ungrateful</span>. 
          I have done so much for so long, with so little. I am now qualified to do <span>anything</span> with <span>nothing</span>.</p>
          <button className="bg-[#CAFA53] text-black text-2xl p-2 rounded-md my-10">Download CV</button>
        </div>
      </div>

      <div id="Services" className="flex w-[80%] overflow-x-scroll overflow-y-visible scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-500 pt-6 gap-2 p-2">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </main>
  </div>
  );
}
