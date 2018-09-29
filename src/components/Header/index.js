import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import { navigateTo } from "gatsby-link"
import Headroom from 'react-headroom'
import LogoBP from '../../img/logoBdP.png'

const Header = () => {
  const handleClick = function (e) {
    const el = document.getElementById("nav");
    const menuPrin = document.getElementById("menuPrincipal")
    e.preventDefault();
    el.classList.toggle("block");
    menuPrin.classList.toggle("bg-oceano");
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


  return (
    <Headroom className="z-40 bg-oceano" id="menuPrincipal">
      <nav className="bg-oceano">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto px-4">
          <div className="block md:inline-block md:mt-0 mr-6 no-underline text-grey-lightest hover:text-white py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-b-2 hover:border-white" onClick={handleClickHome}>
            <strong className="text-lg">Meta <span className="inline-text floating-right text-serif">BdP</span></strong>
          </div>


          <button className="block md:hidden flex items-center px-3 py-2 text-grey-lightest" onClick={handleClick}>
            <FaBars />
          </button>

          <div id="nav" className="hidden md:flex items-center w-full md:w-auto">
              <div className="block md:inline-block mr-6 no-underline text-grey-lightest hover:text-white py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-b-2 hover:border-white" onClick={handleClickReglas} >
                Reglas
              </div>
              <a href="https://www.bancodelpacifico.com/inicio.aspx" target="_blank" className="block md:inline-block md:ml-6 mr-6 no-underline text-grey-lightest font-medium hover:text-white py-3 hover:border-b-2 border-transparent border-b-2 cursor-pointer font-medium  hover:border-white">
              <div className="flex items-center">
                <div className="mr-2">
                  <img src={LogoBP} width="25"/>
                </div>
                <div className="font-bold mx-2 self-center text-lg text-serif">
                  BdP
                </div>
              </div>
              </a>
              </div>
            </div>
      </nav>
    </Headroom>
  );
};

export default Header;