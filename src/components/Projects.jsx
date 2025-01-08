import por2 from "../assets/amazon.png";
import por4 from "../assets/foodix.png";
import por5 from "../assets/blog.jpg.png";
import por6 from "../assets/dash.png";
import por7 from "../assets/cinema.png";
import por8 from "../assets/iphone.png";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center  text-white mt-10">
          <span className="text-white text-4xl m-8">Projects</span>
          <div className="flex flex-col gap-6 ms-6">
          
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
    <a href="https://amazon-clone-2ddh.vercel.app/" target="_blank">
    <img className="w-full object-cover rounded-lg mx-auto mt-4" src={por2} alt="" />

    </a>
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">Amazon_Clone</span>
    <span>• Developed a fully functional e-commerce platform replicating Amazon's features.</span>
    <span>• Implemented dynamic product listings, user authentication, a shopping cart, favourite list, and a checkout system.</span>
    <span>• Managed state efficiently with Redux for seamless user experience.</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">Redux</span>
      <span className="bg-slate-500 p-1 rounded-lg">Next js</span>
      <span className="bg-slate-500 p-1 rounded-lg">Tailwind</span>
      <span className="bg-slate-500 p-1 rounded-lg">Next.Auth</span>
    </div>
  </motion.div>
</div>
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
<a href="https://recipy-seven.vercel.app/" target="_blank">

    <img className="w-full object-cover rounded-lg mx-auto" src={por4} alt="E-commerce Website" />
</a>
    
  
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">Foodix</span>
    <span> • Developed a fully functional food discovery platform, replicating</span>
    <span>• Developed a fully functional food discovery platform, replicating core features of popular meal search
    engines, ensuring fast load times and smooth user interactions.</span>
    <span>• Integrated animations with Framer Motion to enhance user interaction and create a dynamic browsing
    experience.</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">Next JS</span>
      <span className="bg-slate-500 p-1 rounded-lg">Tailwind</span>
     <span className="bg-slate-500 p-1 rounded-lg">Framer Motion</span>
    </div>
  </motion.div>
</div>

<div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.2}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
    <a href="https://movies-8ybb.vercel.app/" target="_blank">
    
    <img className="w-full object-cover mx-auto mt-3 rounded-lg" src={por7} alt="Gaming Website" />
    </a>
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.2}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">Cinema Vault</span>
    <span>• Developed a dynamic movie website with a responsive and interactive UI using Next.js.</span>
    <span>• Integrated external movie APIs for fetching and displaying real-time movie information (ex: ratings, descriptions).</span>
    <span>• Optimized performance and SEO using server-side rendering (SSR) and static site generation (SSG).</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
      <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
      <span className="bg-slate-500 p-1 rounded-lg">JavaScript</span>
      <span className="bg-slate-500 p-1 rounded-lg">Next.js</span>
      <span className="bg-slate-500 p-1 rounded-lg">Tailwendcss</span>
    </div>
  </motion.div>
</div>

           
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.4}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <a href="https://thriving-seahorse-b3e61d.netlify.app/" target="_blank">
        <img className="w-full mx-auto rounded-lg" src={por6} alt="Weather App" />
        
        </a>
      </motion.div>
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.4}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-lg text-center md:text-xl">Business Dashboard</span>
        <span>• Designed and developed a business dashboard with a focus on responsiveness and usability.</span>
        <span>• Built using a modular small component system for scalability and reusability.</span>
        <span>• Styled entirely with CSS, ensuring a lightweight and clean codebase.</span>
        <span>• Optimized for cross-device compatibility with a mobile-first design approach.</span>
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
          <span className="bg-slate-500 p-1 rounded-lg">React</span>
        </div>
      </motion.div>
    </div>
    <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.6}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <a href="https://iphone-five-vert.vercel.app/">
        <img className="w-full mx-auto rounded-lg" src={por8} alt="iphone" />
        </a>
      </motion.div>
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.6}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-lg text-center md:text-xl">Iphone launch</span>
        <span>        • High-performance animation and transitions for engagind user experience.</span>
        <span>    • Optimized media assets and responsive design for fast load times on all devices.</span>
        <span> • Dynamic content sections highlighting device specifications, pricing, and availability.
        </span>
        <div className="flex gap-4 justify-center md:justify-start">

          <span className="bg-slate-500 p-1 rounded-lg">React js</span>
          <span className="bg-slate-500 p-1 rounded-lg">tailwind css</span>
          <span className="bg-slate-500 p-1 rounded-lg">GSAP</span>
        </div>
      </motion.div>
      </div>
      <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.8}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <a href="https://github.com/zyadmagdy99/Blog-PHP-" target="_blank">
        <img className="w-full mx-auto rounded-lg" src={por5} alt="Blog Website" />

        </a>
      </motion.div>
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.8}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-lg text-center md:text-xl">Blog Website</span>
        <span>• Developed a blog platform with PHP and MySQL, featuring user authentication and post management.</span>
        <span>• Implemented secure user login and registration with form validation.</span>
        <span>• Integrated database management with MySQL, ensuring efficient data storage and retrieval.</span>
        <span>• Designed the backend structure to support scalable content management.</span>
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="bg-slate-500 p-1 rounded-lg">PHP</span>
          <span className="bg-slate-500 p-1 rounded-lg">MySQL</span>
        </div>
        </motion.div>
        </div>
    
    
          </div>
        </div>
      );
      
}
