import img from "../assets/me.jpg";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
    
    <div className=" container text-white flex flex-col md:flex-row justify-around items-center w-full max-w-screen-lg mx-auto mt-8">
  {/* Left Section */}
  <div className="left w-full md:w-1/2 ms-5">
    <div className="up">
      <div className="flex flex-col gap-3">
        <motion.span initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:0}} className="text-xl md:text-3xl">Hi there, I am</motion.span>
        <motion.span initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:.5}} className="text-3xl md:text-5xl">ZYAD MAGDY</motion.span>
      </div>
    </div>
    <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:1}} className="down mt-3 md:mt-5 flex flex-col">
      <span className="text-lg md:text-2xl">Full Stack Developer</span>
      <span className="text-sm md:text-base">
        I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like MySQL and PHP using Laravel. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
      </span>
    </motion.div>
  </div>

  {/* Right Section */}
  <motion.div initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:1.2}} className="right w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
    <div className="w-2/5 md:w-1/2">
      <img className="w-full h-auto" src={img} alt="Profile" />
    </div>
  </motion.div>
</div>

    </>
  )
}
