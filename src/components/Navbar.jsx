import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Navbar() {
  return (
    <>
        

<nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <h6 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">zyad magdy</h6>
    </a>
    
    <div className="  md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
       
        <li>
          <a href="https://www.facebook.com/zyad.magdy2" className="text-2xl text-blue-700 block py-2 px-3 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaFacebook /></a>
        </li>
        <li>
          <a href="https://github.com/zyadmagdy99" className="text-2xl block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaGithubSquare /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zyad-magdy22/" className="text-2xl block py-2 px-3 md:p-0 text-sky-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/_zyadmagdy_/" className="text-2xl block py-2 px-3 md:p-0 text-orange-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><FaInstagram /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
