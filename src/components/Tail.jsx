import { motion } from 'framer-motion'
import React from 'react'

export default function Tail() {
  return (
    <div className='text-white mt-8'>
      <hr />
      <hr />
      <div className='flex flex-col justify-center items-center gap-5'>
        <motion.span initial={{y:-100,opacity:0}} viewport={{ once: true }}  transition={{duration:.5,delay:0}} whileInView={{opacity:1 , y:0}} className='text-4xl mt-4'>Get in Touch</motion.span>
        <motion.span initial={{x:-100,opacity:0}} viewport={{ once: true }}  transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}}>+20 1024359803</motion.span>
        <motion.span initial={{x:100,opacity:0}} viewport={{ once: true }} transition={{duration:.5,delay:0}} whileInView={{opacity:1 , x:0}} className='mb-4'>ZyadMagdy08@gmail.com</motion.span>
      </div>
    </div>
  )
}
