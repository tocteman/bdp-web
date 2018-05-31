import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import { navigateTo } from "gatsby-link"
import Headroom from 'react-headroom'

const HeaderAlt = () => {
  const handleClick = function (e) {
    const el = document.getElementById("nav");
    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  const handleClickHome = function (e) {
    e.preventDefault();
    navigateTo('/')
  }

  const handleClickReglas = function (e) {
    e.preventDefault();
    navigateTo('/reglas')
    document.getElementById("nav").classList.toggle("hidden");
  }

  const handleClickEquipo = function (e) {
    const el = document.getElementById("nav");
    e.preventDefault();
    navigateTo('/equipo')
    el.classList.toggle("hidden");
  };

  const handleClickUnete = function (e) {
    e.preventDefault();
    navigateTo('/unete-equipo')
    document.getElementById("nav").classList.toggle("hidden");
  }

  return (
    <Headroom className="z-40">
      <nav className="">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto px-4">
          <div className="block md:inline-block md:mt-0 mr-6 no-underline font-medium py-3 hover:border-b-2 border-transparent border-b-2 cursor-pointer font-medium  hover:border-grey-darkest" onClick={handleClickHome}>
            <span className="text-xl">
              Übank
          </span>
          </div>


          <button className="block md:hidden flex items-center px-3 py-2" onClick={handleClick}>
            <FaBars />
          </button>

          <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
            <div className="text">
              <div className="block md:inline-block md:mt-0 mr-6 no-underline py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={handleClickReglas} >
                Reglas
            </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline  py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={handleClickEquipo} >
                Equipo
              </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline  py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={handleClickUnete} id="unete">
                Ünete
            </div>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default HeaderAlt;