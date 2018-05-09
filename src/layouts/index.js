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
  <div className="flex flex-col font-sans min-h-screen text-blue-darkest">
      <Helmet
    title="Übank"
      meta={[
        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: "description", content: "Sample" },
        { name: "keywords", content: "fintech, ahorro" }
      ]}
    />
    <Header />
    
    
    <div className="flex flex-col flex-grow md:justify-center w-full">      {children()}
    </div>
    <div className="flex flex-col bg-grey-darkest text-grey-lightest mt-0 pt-16 pb-16">
      <div className="mx-auto">
        <h2 className="font-medium px-4">¿Aún no tienes Übank?</h2>
        <h5 className="font-light px-4">Descarga la app y comienza a hacer tus metas realidad.</h5>
        <div className="flex px-4 justify-between py-4 w-80">
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