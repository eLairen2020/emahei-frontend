import React, { useState } from "react";
function Index() {
   
    return (

<section className="relative bg-white">
 

  <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div className="relative max-w-screen-xl py-32  bg-cover bg-no-repeat bg-[url('/images/bg1.jpg')] lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Lets 
        <strong className="font-extrabold text-rose-800 sm:block">
          Study Together.
        </strong>
      </h1>

      <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
      Make your Schools Covid-19 effect free zone by bringing up your School Online
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-800 sm:w-auto active:bg-sky-800 hover:bg-sky-800 focus:outline-none focus:ring" href="/get-started">
          Get Started
        </a>

        <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-800 sm:w-auto hover:text-white hover:bg-rose-800 active:text-sky-800 focus:outline-none focus:ring" href="/about">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    );

}
export default Index;