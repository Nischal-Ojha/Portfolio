import Avatar from "../Components/Avatar";
import Contain from "../Components/Contain";
import NewDate from "../Components/NewDate";

export default function Home() {
  
  return (
    <div className="min-h-screen p-4 m-4 mt-28 font-[family-name:var(--font-geist-sans)] relative">
    <main className="flex flex-col gap-8 items-center w-full">
      <div className="Home h-[750px] flex flex-col lg:w-[80%] md:w-[70%] lg:flex-row md:flex-row items-center">
        <Avatar />
        <div className="w-full text-center my-8 
                        md:w-[60%] md:ml-16 md:text-left
                        lg:w-[50%] lg:ml-20 lg:text-left
                        ">
          <NewDate />
          <p className="text-2xl md:text-2xl lg:text-3xl my-5">Hello I&#39;m Nischal <span>Ojha</span></p>
          <p className="text-lg md:text-lg lg:text-2xl text-justify lg:text-left md:text-left my-5"><span>Peace</span> I leave with you, my <span>peace</span> I give unto you: 
            not as the <span>world giveth</span>, give I unto you. Let not your <span>heart</span> be <span>troubled</span>, neither let it be <span>afraid</span>.</p>
          <p className="text-lg md:text-lg lg:text-2xl text-right">- Jesus Christ</p>
          <button className="bg-[#CAFA53] text-black text-2xl p-2 rounded-md my-10">Download CV</button>
        </div>
      </div>

      <Contain />
      
    </main>
  </div>
  );
}
