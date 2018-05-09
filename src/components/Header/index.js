import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import { navigateTo } from "gatsby-link"
import Headroom from 'react-headroom'

const Header = () => {
  const handleClick = function (e) {
    const el = document.getElementById("nav");
    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  const handleClickHome = function(e){
    e.preventDefault();
    document.getElementById("nav").classList.toggle("hidden");
    navigateTo('/')
  }

  const handleClickReglas = function (e) {
    e.preventDefault();
    document.getElementById("nav").classList.toggle("hidden");
    navigateTo('/reglas')
  }

  const handleClickEquipo = function (e) {
    const el = document.getElementById("nav");
    e.preventDefault();
    el.classList.toggle("hidden");
    navigateTo('/equipo')
  };

  const handleClickUnete = function (e) {
    e.preventDefault();
    document.getElementById("nav").classList.toggle("hidden");
    navigateTo('/unete-equipo')
  }

  return (
    <Headroom className="z-40">
      <nav className="bg-gradient-green-dark-to-green shadow-md">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-4">
          <div className="flex items-center no-underline text-white hover:text-grey-light cursor-pointer" onClick={handleClickHome}>
            <span className="font-bold text-xl tracking-tight">
              Übank
          </span>
          </div>


          <button className="block md:hidden flex items-center px-3 py-2 text-white" onClick={handleClick}>
            <FaBars />
          </button>

          <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
            <div className="text">
              <div className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-lightest hover:text-grey-light cursor-pointer" onClick={handleClickReglas}>
                Reglas
            </div>
              <div className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-lightest hover:text-grey-light cursor-pointer" onClick={handleClickEquipo}>
                Equipo
              </div>
              <div className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-lightest hover:text-grey-light cursor-pointer" onClick={handleClickUnete} id="unete">
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