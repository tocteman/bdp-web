import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import AppleStore from '../img/aunNoTienes/apple_store.svg'
import GooglePlay from '../img/aunNoTienes/google_play.svg'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
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
    
    <Footer />
  </div>
);

// export const aunNoQuery = graphql`
// query AunNoTienes {
//   file (id: {regex: "/aunNoTienesIPhones/"})
//   { 
//     childImageSharp {
//       sizes (maxWidth:2000){
//       ...GatsbyImageSharpSizes_noBase64
//       }    
//     }
//   }
// }
// `

TemplateWrapper.propTypes = {
  children: PropTypes.func
};



export default TemplateWrapper;