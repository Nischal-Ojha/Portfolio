import Avatar from "../Components/Avatar";
import Image from "next/image";


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
    <main className="flex flex-col gap-8 row-start-2 items-center lg:items-start w-full">

      <div className="Home lg:w-[80%] m-auto flex flex-col lg:flex-row items-center ">
        <div className="order-first lg:order-last">
          <Avatar />
        </div>          
        <div className="w-full lg:w-[50%] my-8 lg:ml-20 text-center lg:text-left">
          <p className="text-3xl lg:text-5xl">{getGreeting()},</p>
          <p className="text-2xl lg:text-3xl my-5">Hello I'm Nischal <span>Ojha</span></p>
          <p className="text-lg lg:text-2xl text-justify lg:text-left">I the <span>unwilling</span>, led by the <span>unknowing</span>, am doing the <span>impossible</span> for the <span>ungrateful</span>. 
          I have done so much for so long, with so little. I am now qualified to do <span>anything</span> with <span>nothing</span>.</p>
          <button className="bg-[#CAFA53] text-black text-2xl p-2 rounded-md my-10">Download CV</button>
        </div>
      </div>

      <div id="Services">
        <h2 className="text-2xl">Services</h2>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas nihil! Minima sit debitis,
           sed iste asperiores quas reiciendis labore et error illum facere unde porro aliquam ratione quis ad
           ipisci doloribus molestias. Id, aperiam neque ex odio qui natus aut cumque. Commodi totam dolorem repel
           lat nobis labore maxime temporibus similique.</p>
        <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ea dolore quisquam neque itaque culpa dignissimos, nulla unde nam
              dicta vel nisi doloremque velit similique ut quasi ab, quibusdam aperiam earu
              m a. In rerum tempora deleniti numquam incidunt! Minima, temporibus quas 
            dolorum sunt officiis optio repudiandae. Ratione aspernatur ab nostrum? Sapiente.</p>
        <p className="m-10">Lorem ipsum dolor sit amet, c
            onsectetur adipisicing elit. In eligendi hic exercitationem facere veniam possimus ipsam. Ipsa ab mai
            ores possimus autem blanditiis nobis reprehenderit culpa voluptate accusamus quas praesentium est ips
            um minima optio, assumenda incidunt eos consequuntur, modi tene
            tur voluptas dolorem nam. Non architecto soluta minus dignissimos, nisi earum exercitationem.</p>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas nihil! Minima sit debitis,
           sed iste asperiores quas reiciendis labore et error illum facere unde porro aliquam ratione quis ad
           ipisci doloribus molestias. Id, aperiam neque ex odio qui natus aut cumque. Commodi totam dolorem repel
           lat nobis labore maxime temporibus similique.</p>
        <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ea dolore quisquam neque itaque culpa dignissimos, nulla unde nam
              dicta vel nisi doloremque velit similique ut quasi ab, quibusdam aperiam earu
              m a. In rerum tempora deleniti numquam incidunt! Minima, temporibus quas 
            dolorum sunt officiis optio repudiandae. Ratione aspernatur ab nostrum? Sapiente.</p>
        <p className="m-10">Lorem ipsum dolor sit amet, c
            onsectetur adipisicing elit. In eligendi hic exercitationem facere veniam possimus ipsam. Ipsa ab mai
            ores possimus autem blanditiis nobis reprehenderit culpa voluptate accusamus quas praesentium est ips
            um minima optio, assumenda incidunt eos consequuntur, modi tene
            tur voluptas dolorem nam. Non architecto soluta minus dignissimos, nisi earum exercitationem.</p>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas nihil! Minima sit debitis,
           sed iste asperiores quas reiciendis labore et error illum facere unde porro aliquam ratione quis ad
           ipisci doloribus molestias. Id, aperiam neque ex odio qui natus aut cumque. Commodi totam dolorem repel
           lat nobis labore maxime temporibus similique.</p>
        <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ea dolore quisquam neque itaque culpa dignissimos, nulla unde nam
              dicta vel nisi doloremque velit similique ut quasi ab, quibusdam aperiam earu
              m a. In rerum tempora deleniti numquam incidunt! Minima, temporibus quas 
            dolorum sunt officiis optio repudiandae. Ratione aspernatur ab nostrum? Sapiente.</p>
        <p className="m-10">Lorem ipsum dolor sit amet, c
            onsectetur adipisicing elit. In eligendi hic exercitationem facere veniam possimus ipsam. Ipsa ab mai
            ores possimus autem blanditiis nobis reprehenderit culpa voluptate accusamus quas praesentium est ips
            um minima optio, assumenda incidunt eos consequuntur, modi tene
            tur voluptas dolorem nam. Non architecto soluta minus dignissimos, nisi earum exercitationem.</p>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas nihil! Minima sit debitis,
           sed iste asperiores quas reiciendis labore et error illum facere unde porro aliquam ratione quis ad
           ipisci doloribus molestias. Id, aperiam neque ex odio qui natus aut cumque. Commodi totam dolorem repel
           lat nobis labore maxime temporibus similique.</p>
        <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ea dolore quisquam neque itaque culpa dignissimos, nulla unde nam
              dicta vel nisi doloremque velit similique ut quasi ab, quibusdam aperiam earu
              m a. In rerum tempora deleniti numquam incidunt! Minima, temporibus quas 
            dolorum sunt officiis optio repudiandae. Ratione aspernatur ab nostrum? Sapiente.</p>
        <p className="m-10">Lorem ipsum dolor sit amet, c
            onsectetur adipisicing elit. In eligendi hic exercitationem facere veniam possimus ipsam. Ipsa ab mai
            ores possimus autem blanditiis nobis reprehenderit culpa voluptate accusamus quas praesentium est ips
            um minima optio, assumenda incidunt eos consequuntur, modi tene
            tur voluptas dolorem nam. Non architecto soluta minus dignissimos, nisi earum exercitationem.</p>
        <p className="m-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, voluptas nihil! Minima sit debitis,
           sed iste asperiores quas reiciendis labore et error illum facere unde porro aliquam ratione quis ad
           ipisci doloribus molestias. Id, aperiam neque ex odio qui natus aut cumque. Commodi totam dolorem repel
           lat nobis labore maxime temporibus similique.</p>
        <p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ea dolore quisquam neque itaque culpa dignissimos, nulla unde nam
              dicta vel nisi doloremque velit similique ut quasi ab, quibusdam aperiam earu
              m a. In rerum tempora deleniti numquam incidunt! Minima, temporibus quas 
            dolorum sunt officiis optio repudiandae. Ratione aspernatur ab nostrum? Sapiente.</p>
        <p className="m-10">Lorem ipsum dolor sit amet, c
            onsectetur adipisicing elit. In eligendi hic exercitationem facere veniam possimus ipsam. Ipsa ab mai
            ores possimus autem blanditiis nobis reprehenderit culpa voluptate accusamus quas praesentium est ips
            um minima optio, assumenda incidunt eos consequuntur, modi tene
            tur voluptas dolorem nam. Non architecto soluta minus dignissimos, nisi earum exercitationem.</p>
      </div>
    </main>
  </div>
  );
}
