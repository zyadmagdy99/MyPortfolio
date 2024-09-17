import React from 'react'
import img from "../assets/about.jpg"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
  <div className="m container text-white mt-20 ms-10 flex flex-col items-center justify-around">
  <span className="text-3xl font-bold mb-8 me-5">About Me</span>
  
  <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-screen-lg mx-auto mt-8 ">
    <motion.div initial={{x:-100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="left w-full md:w-1/2 flex  mb-8 md:mb-0">
      <div className="w-3/4">
        <img className="w-full" src={img} alt="Profile" />
      </div>
    </motion.div>
    
    <motion.div initial={{x:100,opacity:0}}  viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className="right w-full md:w-1/2 me-5 flex flex-col md:ms-8 px-6">
      <p>
        Hi, I'm ZYAD MAGDY, a former veterinarian turned full stack developer with a passion for technology and web development.
        After spending several years in the veterinary field, I made a career shift to pursue my love for building dynamic, scalable web applications.
        My background in science gives me a unique perspective on problem-solving, which I now apply to crafting efficient and user-friendly digital solutions.
      </p>
     
      <p className="mt-4">
        Outside of web development, my scientific curiosity still drives me to stay up-to-date with the latest technological trends, and I enjoy working on personal projects, including a gaming website!
      </p>
    </motion.div>
  </div>
</div>

    </>
  )
}
