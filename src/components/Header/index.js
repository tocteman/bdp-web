import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import Headroom from 'react-headroom'

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <Headroom className="z-40">
      <nav className="bg-gradient-green-dark-to-green shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-4">
        <Link to="/" className="flex items-center no-underline text-white hover:text-grey-light">
          <span className="font-bold text-xl tracking-tight">
            Übank
          </span>
        </Link>


        <button className="block md:hidden flex items-center px-3 py-2 text-white" onClick={handleClick}>
          <FaBars />
        </button>

        <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
          <div className="text">
            <Link to="/unete-equipo" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-lightest hover:text-grey-light">
              Trabaja con nosotros
            </Link>
              <Link to="/reglas" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-grey-lightest hover:text-grey-light">
                Reglas
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </Headroom>
  );
};

export default Header;
