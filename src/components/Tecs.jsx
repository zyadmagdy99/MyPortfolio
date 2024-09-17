import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa"; 
import { motion } from 'framer-motion';




export default function Tecs() {
  let icons = (duration)=>({
    initial:{y:-10},
    animate:{
      y:[10,-10] ,
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    },},
  })
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-10'>
      <span className='text-4xl text-white m-7'>Technologies</span>

      <div className='w-1/2 flex flex-wrap gap-5 justify-center'>
          <motion.div variants={icons(2.9)}
          initial="initial"
          animate="animate"
          className=''>
          <FaReact  className='text-7xl text-cyan-400 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.div>
          <motion.dev variants={icons(1.8)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <RiNextjsFill className='text-7xl text-white border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(1.5)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaJs className='text-7xl text-yellow-400 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2.7)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <BiLogoTypescript className='text-7xl text-blue-600 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2.5)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaGitAlt className='text-7xl text-orange-600 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaGithub className='text-7xl text-blue-900 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2.9)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaSass className='text-7xl text-pink-500 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(1.5)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <GrMysql className='text-7xl text-blue-900 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaLaravel className='text-7xl text-red-600 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2.1)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaPhp className='text-7xl text-purple-600 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
          <motion.dev variants={icons(2.3)}
          initial="initial"
          animate="animate" className='flex flex-wrap'>
          <FaWordpress className='text-7xl text-sky-400 border-neutral-800 border-4 p-3 rounded-2xl' />
          </motion.dev>
      </div>
    </div>
    </>
  )
}
