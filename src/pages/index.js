import React from "react";
import Link from "gatsby-link";
import ReactGranimCanvas from "../components/ReactGranimCanvas"
import IPhone from "../images/iphone7.png"
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right'
import FaShield from 'react-icons/lib/fa/shield'
import FaDollar from 'react-icons/lib/fa/dollar'
import FaBuildingO from 'react-icons/lib/fa/building-o'
import FaLineChart from 'react-icons/lib/fa/line-chart'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaList from 'react-icons/lib/fa/list'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div>  <div className="flex h-auto relative w-full mt-0 p-12 text-center self-center mb-8">
    <ReactGranimCanvas />
    <div className="flex flex-wrap p-4 text-center mx-auto">
      <div className="md:w-full lg:w-3/5 text-xl self-center">
        <h1 className="text-grey-lightest mb-4 leading-normal">Tu vida.<br /> Tus reglas.<br /> Tus ahorros.</h1>
        <p className="font-light mb-4 text-grey-light text-center leading-normal max-w-md">Übank es la forma más fácil para ahorrar y hacer tus sueños realidad.</p>
        <button className="bg-green-dark rounded-full px-4 py-2 font-medium text-sm text-grey-lightest mb-8 hover:bg-green shadow-md">Download</button>
      </div>
      <div className="md:w-full lg:w-2/5 text-center text-xl mx-auto">
        <img src={IPhone} className="block mx-auto w-64" />
      </div>
    </div>
  </div>


    <div className="flex pt-8 px-8 pb-4 mx-auto text-blue-darkest max-w-xl">
      <div className="sm:w-full md:w-1/2 mx-auto">
        <h1 className="font-medium leading-normal">Qué es Übank</h1>
        <p className="max-w-sm leading-normal"><strong>Übank</strong> es la aplicación que te permite ahorrar según tu estilo de vida. A través de las <em>Reglas de Ahorro Automático</em>, puedes elegir cuánto y cuándo ahorrar y seguir haciendo tu vida. Los ahorros se acumularán si que ni siquiera te des cuenta.</p>
      </div>
    </div>
    <div className="flex flex-wrap p-4 max-w-xl mx-auto items-baseline text-teal-darkest">
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.montaniaImage.resolutions} />
        <h2 className="leading-normal font-medium">Sueña</h2>
        <p className="max-w-sm leading-normal">Ahorra para las cosas que realmente te importan. Tú decides las <em>Reglas</em> que las harán realidad.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.coctelImage.resolutions} />
        <h2 className="leading-normal font-medium">Vive</h2>
        <p className="max-w-sm leading-normal">Ahorrar no tiene por qué significar sacrificarte. Vive tu vida y deja que <strong>Übank</strong> haga el trabajo difícil.</p>
      </div>
      <div className="md:w-1/3 p-4 text-center">
        <Img resolutions={data.creceImage.resolutions} />
        <h2 className="leading-normal font-medium">Crece</h2>
        <p className="max-w-sm leading-normal">Cuando las <em>Reglas</em> se activan, transferimos el dinero a una cuenta segura. Siempre estará disponible.</p>
      </div>
    </div>

    <div className="flex flex-wrap pt-8 m-8 bg-grey-lightest max-w-xl mx-auto">
      <div className="sm:w-full md:w-1/2 pt-4 px-4 pb-0 mx-auto md:p-8">
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaBuildingO className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Multibanco</h4>
            <p className="max-w-sm leading-normal">Conecta tus cuentas y tarjetas de tus bancos y elige desde cuáles quieres ahorrar.</p>
          </div>
        </div>
        <div className="flex">
          <div className="wt-1/3 p-2 pb-0">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaLightbulbO className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Recomendaciones</h4>
            <p className="max-w-sm leading-normal">Recibe recomendaciones de <em>Reglas</em> que podrías activar en base a tu estilo de vida.</p>
          </div>
        </div>
      </div>
      <div className="sm:w-full md:w-1/2 mx-auto pl-4 py-4 md:p-8">
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaList className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Claridad</h4>
            <p className="max-w-sm leading-normal">Mira todas tus transacciones por categoría. Ahorra más, gasta mejor.</p>
          </div>
        </div>
        <div className="flex">
          <div className="wt-1/3 p-2">
            <div className="bg-green w-16 h-16 rounded-full shadow-md">
              <FaLineChart className="mt-4 ml-4 text-3xl text-white text-center" />
            </div>
          </div>
          <div className="wt-2/3 p-2">
            <h4 className="leading-normal font-medium">Rentabilidad</h4>
            <p className="max-w-sm leading-normal">Ahorrar fácil no es suficiente. Genera interés de todos los fondos que guardes mediante <strong>Übank</strong>.</p>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />



  </div>
);

export const query = graphql`
  query indexImageQuery {
    montaniaImage: imageSharp(id: { regex: "/icono-cordillera/"}){
      resolutions(width:100){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    creceImage: imageSharp(id: { regex: "/crece/"}){
      resolutions(width:100){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
    coctelImage: imageSharp(id: { regex: "/coctel/"}){
      resolutions(width:100){
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`

export default IndexPage;
