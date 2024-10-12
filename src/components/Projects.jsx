import React from "react";
import por from "../assets/e-commerece.jpg.png";
import por2 from "../assets/food.jpg.png";
import por3 from "../assets/gaming.jpg.png";
import por4 from "../assets/weather.jpg.png";
import por5 from "../assets/blog.jpg.png";
import por6 from "../assets/social2.png";
import { motion } from "framer-motion";


export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center  text-white mt-10">
          <span className="text-white text-4xl m-8">Projects</span>
          <div className="flex flex-col gap-6 ms-6">
            {/* Project 1 */}
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
    <img className="w-full object-cover mx-auto" src={por} alt="E-commerce Website" />
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">E-Commerce Website</span>
    <span>• Developed an e-commerce website with a dynamic and responsive front-end using React.js.</span>
    <span>• Created features for product display and user authentication.</span>
    <span>• Integrated a real-world payment gateway (Stripe) into the app.</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
      <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
      <span className="bg-slate-500 p-1 rounded-lg">React</span>
      <span className="bg-slate-500 p-1 rounded-lg">Tailwind</span>
    </div>
  </motion.div>
</div>
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
    <img className="w-full object-cover mx-auto" src={por6} alt="" />
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">Social Website</span>
    <span>• Developed a responsive interface for seamless user experiences across devices.</span>
    <span>• Built a social platform with real-time interactions, user authentication, and profiles.</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
      <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
      <span className="bg-slate-500 p-1 rounded-lg">Next js</span>
      <span className="bg-slate-500 p-1 rounded-lg">Tailwind</span>
    </div>
  </motion.div>
</div>

<div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center">
  <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.2}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6 flex h-[150px]">
    <img className="w-full object-cover mx-auto" src={por3} alt="Gaming Website" />
  </motion.div>
  <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.2}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-3/6">
    <span className="text-lg text-center md:text-xl mt-4">Gaming Website</span>
    <span>• Developed a fully responsive game website with a modern design and smooth animations.</span>
    <span>• Implemented categories for easy access to games using an API.</span>
    <div className="flex gap-4 justify-center md:justify-start">
      <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
      <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
      <span className="bg-slate-500 p-1 rounded-lg">JavaScript</span>
      <span className="bg-slate-500 p-1 rounded-lg">Bootstrap</span>
      <span className="bg-slate-500 p-1 rounded-lg">jQuery</span>
    </div>
  </motion.div>
</div>

           
            <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.4}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <img className="w-full mx-auto" src={por4} alt="Weather App" />
      </motion.div>
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.4}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-lg text-center md:text-xl">Weather App</span>
        <span>• Created a weather application that shows weather in different countries with the ability to search for specific countries and display their weather.</span>
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
          <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
          <span className="bg-slate-500 p-1 rounded-lg">JavaScript</span>
          <span className="bg-slate-500 p-1 rounded-lg">Bootstrap</span>
        </div>
      </motion.div>
    </div>
    <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.6}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <img className="w-full mx-auto" src={por2} alt="Food Review Website" />
      </motion.div>
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.6}} whileInView={{opacity:1 , x:0}} className="right flex flex-col gap-2 w-full md:w-1/2">
        <span className="text-lg text-center md:text-xl">Food Review Website</span>
        <span>• Created a food recipe exploration website, allowing users to browse and filter through a variety of recipes.</span>
        <span>• Implemented jQuery for efficient DOM manipulation and interactive features.</span>
        <div className="flex gap-4 justify-center md:justify-start">
          <span className="bg-slate-500 p-1 rounded-lg">HTML</span>
          <span className="bg-slate-500 p-1 rounded-lg">CSS</span>
          <span className="bg-slate-500 p-1 rounded-lg">JavaScript</span>
          <span className="bg-slate-500 p-1 rounded-lg">Bootstrap</span>
          <span className="bg-slate-500 p-1 rounded-lg">jQuery</span>
        </div>
      </motion.div>
      </div>
      <div className="repeats flex flex-col md:flex-row gap-10 justify-center items-center  md:text-left">
      <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:.8}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/6">
        <img className="w-full mx-auto" src={por5} alt="Blog Website" />
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
