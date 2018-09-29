import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import AppleStore from '../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../img/aunNoTienes/google_play.svg'
import Footer from "../components/Footer";
import "./index.css";
import Img from 'gatsby-image';
import Header from '../components/Header'

const TemplateWrapper = ({ children, data }) => (

  <div className="flex flex-col font-sans min-h-screen text-piedra-very-dark">
      <Helmet
    title="Meta BdP"
      meta={[
        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: "description", content: "Ahorra para las cosas que realmente importan. Tú decides las reglas que las harán realidad" },
        { name: "keywords", content: "fintech, ahorro" },
      ]}
    />
    
    <Header />
    <div className="flex flex-col flex-grow md:justify-center w-full">      {children()}
    </div>
    
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};



export default TemplateWrapper;