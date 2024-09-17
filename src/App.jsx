import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tecs from './components/Tecs'
import Projects from './components/Projects'
import Tail from './components/Tail'

export default function App() {
  return (
    <>

    <div className="fixed inset-0 -z-10  w-full h-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    </div>
    <div className='w-full'>

    <Navbar/>
    </div>
    <Hero />
    <About/>
    <Tecs />
    <Projects/>
    <Tail/>
</>   
  )
}
