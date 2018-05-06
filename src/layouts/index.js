import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
require("typeface-ibm-plex-sans")

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
      <Helmet
      title="Übank"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "fintech, ahorro" }
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