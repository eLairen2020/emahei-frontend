import React, { Fragment, useState } from "react";
import Link from 'next/link';
import Dropdown_Courses from './Dropdown_Courses';


export default function Nav({categories}) {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuSm, setShowMenuSm] = useState(false);
    const [search, setSearch] = useState(false);
    // console.log('nav'+" "+ categories)

    return (

    <>
       {/* Slider Component Container  */}
      <div className="flex flex-col items-center justify-center mt-30" x-cloak="true" x-data="appData()" x-init="appInit()">
          <div className="flex flex-col">
            {/* :style="`width: ${percent}%`" */}
            
              <nav className="flex justify-around py-4 bg-slate-900
                  backdrop-blur-md shadow-md w-full
                  fixed top-0 left-0 right-0 z-10">
      
                 
                  <div className="flex items-center">
                  
                  <Link href="/">
                      <a className="cursor-pointer">
                          <h3 className="text-2xl font-medium text-sky-800">
                              <img className="h-10 object-cover"
                                  src="/images/logo.png" alt="eMahei Logo"/>
                          </h3>
                      </a>
                      </Link>
                  </div>
      
                 
                  <div className="items-center hidden space-x-8 lg:flex">
                      
                      <Dropdown_Courses categories={categories}/>
                      
                        <Link href="/LiveClass">
                      <a className="flex text-sky-100 
                          cursor-pointer transition-colors duration-300 hover:text-orange-800
                          font-normal text-sky-800">
                          Live Class
                      </a>
                      </Link>
      
                      <a className="flex text-sky-100 hover:text-orange-800
                          cursor-pointer font-normal transition-colors duration-300">
                          Examination
                      </a>

                      
                    <Link href="/blog">
                      <a  className="flex text-sky-100 hover:text-orange-800
                          cursor-pointer font-normal transition-colors duration-300">
                          Blog
                      </a>
                      </Link>
      
                      

                      <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                          <label htmlFor="search" className="sr-only">Search </label>
                          <form methode="get" action="#" className="relative z-50">
                            <button type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                              </svg>
                            </button>
                            <input type="text" name="s" id="s" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-sky-800 text-gray-300 placeholder-gray-400 focus:outline-blue-500 focus:bg-white focus:text-gray-600 sm:text-sm transition duration-150 ease-in-out" placeholder="Search"/>
                          </form>
                        </div>
                      </div>
      
              
                  </div>
  
                  <div className="flex items-center space-x-5">
                      
                      <a className="flex text-sky-100 hover:text-white/80 hover:bg-sky-800 rounded-md border font-simibold text-sky-800 border-sky-100 hover:border-sky-800 shadow-sm px-5 py-1
                          cursor-pointer transition-colors duration-300">
         
                          Register
                      </a>
      
                      {/* <!-- Login --> */}
                      <a className="block text-gray-600 hover:text-white/80 hover:bg-sky-800 rounded-md border text-sky-800 border-sky-800 shadow-sm px-7 py-1
                          cursor-pointer transition-colors duration-300 
                          font-semibold text-sky-800">
      
                          Login
                      </a>
                  </div>
              </nav>
              
    
          </div>
      
          
         
      
         
          
     </div>
     



     
</>
    );
}