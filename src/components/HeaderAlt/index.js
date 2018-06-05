import React from "react";
import Link from "gatsby-link";
import FaBars from 'react-icons/lib/fa/bars';
import { navigateTo } from "gatsby-link"
import Headroom from 'react-headroom'

export default class HeaderAlt extends React.Component {
  constructor(props){
    super(props)
    this.state={
      faBarsColor: "#2d3342"
    }
    this.pinFaBars = this.pinFaBars.bind(this);
    this.unpinFaBars = this.unpinFaBars.bind(this);
  }

  handleClick = function (e) {
    const el = document.getElementById("nav");
    const menuPrin = document.getElementById("menuHeadroom")
    e.preventDefault();
    el.classList.toggle("block");
    menuPrin.classList.toggle("bg-grey-darkest-semiopaco");
    menuPrin.classList.toggle("text-white");
    el.classList.toggle("hidden");
  };

  handleClickHome (e) {
    e.preventDefault();
    navigateTo('/')
  }

  handleClickReglas (e) {
    e.preventDefault();
    navigateTo('/reglas')
    document.getElementById("nav").classList.toggle("hidden");
  }

  handleClickEquipo (e) {
    const el = document.getElementById("nav");
    e.preventDefault();
    navigateTo('/equipo')
    el.classList.toggle("hidden");
  };

  handleClickUnete (e) {
    e.preventDefault();
    navigateTo('/unete-equipo')
    document.getElementById("nav").classList.toggle("hidden");
  }

  pinFaBars () {
    this.setState({faBarsColor:"white"})
  }

  unpinFaBars() {
    this.setState({ faBarsColor: "#2d3342" })
  }

  render () {
  return(
    <Headroom className="z-40 headroom-alt" id="menuHeadroom" onPin={this.pinFaBars} onUnfix={this.unpinFaBars}>
      <nav className="">
        <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto px-4">
          <div className="block md:inline-block md:mt-0 mr-6 no-underline font-medium py-3 hover:border-b-2 border-transparent border-b-2 cursor-pointer font-medium  hover:border-grey-darkest" onClick={this.handleClickHome}>
            <span className="text-xl">
              Übank
          </span>
          </div>


          <button className="block md:hidden flex items-center px-3 py-2" onClick={this.handleClick.bind(this)}>
            <FaBars fill={this.state.faBarsColor} />
          </button>

          <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
            <div className="text">
              <div className="block md:inline-block md:mt-0 mr-6 no-underline py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={this.handleClickReglas} >
                Reglas
            </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline  py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={this.handleClickEquipo} >
                Equipo
              </div>
              <div className="block md:inline-block md:mt-0 mr-6 no-underline  py-4 hover:border-b-2 border-transparent border-b-2 cursor-pointer hover:border-grey-darkest" onClick={this.handleClickUnete} id="unete">
                Ünete
            </div>
            </div>
          </div>
        </div>
      </nav>
    </Headroom>
  );
  }
}