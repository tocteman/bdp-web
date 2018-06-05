import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import { navigateTo } from "gatsby-link"
import Headroom from 'react-headroom'

const Header = () => {
  const handleClick = function (e) {
    const el = document.getElementById("nav");
    const menuPrin = document.getElementById("menuPrincipal")
    e.preventDefault();
    el.classList.toggle("block");
    menuPrin.classList.toggle("bg-grey-darkest-semiopaco");
    el.classList.toggle("hidden");
  };

  const handleClickHome = function(e){
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
    <Headroom className="z-40" id="menuPrincipal">
      <nav className="">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto px-4">
          <div className="block md:inline-block md:mt-0 mr-6 no-underline text-grey-lightest font-medium hover:text-white py-3 hover:border-b-2 border-transparent border-b-2 cursor-pointer font-medium  hover:border-white" onClick={handleClickHome}>
            <span className="text-xl">
              Übank
          </span>
          </div>


          <button className="block md:hidden flex items-center px-3 py-2 text-grey-lightest" onClick={handleClick}>
            <FaBars />
          </button>

          <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
            <div className="text">
              <div className="block md:inline-block md:mt-0 mr-6 no-underline text-grey-lightest hover:text-white py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-b-2 hover:border-white" onClick={handleClickReglas} >
                Reglas
            </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline text-grey-lightest hover:text-white py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-b-2 hover:border-white" onClick={handleClickEquipo} >
                Equipo
              </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline text-grey-lightest hover:text-white py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-b-2 hover:border-white" onClick={handleClickUnete}  id="unete">
                Ünete
            </div>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default Header;