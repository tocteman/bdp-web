import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import AppleStore from '../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../img/aunNoTienes/google_play.svg'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
require("typeface-ibm-plex-sans")
import Img from 'gatsby-image'

const TemplateWrapper = ({ children, data }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
      <Helmet
    title="Übank"
      meta={[
        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: "description", content: "Ahorra para las cosas que realmente importan. Tú decides las reglas que las harán realidad" },
        { name: "keywords", content: "fintech, ahorro" },
      ]}
    />
    <Header />
    
    
    <div className="flex flex-col flex-grow md:justify-center w-full">      {children()}
    </div>
    <div className="flex flex-col bg-grey-darkest text-grey-lightest mt-0 pt-16 pb-16 text-center">
      <div className="mx-auto">
        <h3 className="font-medium px-4">¿Aún no tienes <span className="text-white">Übank?</span></h3>
        <p className="font-light px-4">Descarga la app y comienza a hacer tus metas realidad.</p>
        <div className="flex px-4 justify-around py-6">
          <img src={GooglePlay} className="w-32" />
          <img src={AppleStore} className="w-32" />
        </div>
      </div>
      {/* <Img sizes={data.file.childImageSharp.sizes} className="h-40"/> */}
    </div>
    <Footer />
  </div>
);

export const aunNoQuery = graphql`
query AunNoTienes {
  file (id: {regex: "/aunNoTienesIPhones/"})
  { 
    childImageSharp {
      sizes (maxWidth:2000){
      ...GatsbyImageSharpSizes_noBase64
      }    
    }
  }
}
`

TemplateWrapper.propTypes = {
  children: PropTypes.func
};



export default TemplateWrapper;