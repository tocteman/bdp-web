import React from "react"
import Link from "gatsby-link"
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FintechWinner from '../../img/footer/fintech.jpg'



const Footer = () => (
  <div className="bg-grey-darkest text-grey-lightest py-4 leading-normal">
    <div className="text-center md:text-left md:flex justify-between items-start max-w-xl mx-auto p-4 md:p-4">
      <div className="sm:w-1/2 lg:w-1/4 my-8 md:my-2 mx-auto text-center md:text-left text-grey-lightest">
        <p className="font-medium text-white pb-2 text-xl">Übank</p>
        <ul className="list-reset font-light leading-normal">
          <li><Link to="/equipo/" className="text-grey-lightest no-underline hover:text-white hover:border-white hover:border-b-2">Acerca de nosotros</Link></li>
          <li><Link to="/unete-equipo/" className="text-grey-lightest no-underline hover:text-white hover:border-white hover:border-b-2"> Trabaja con nosotros</Link></li>
          <li>Blog</li>
          <li>Preguntas Frecuentes</li>
          <li>Precio</li>
        </ul>
      </div>

      <div className="sm:w-1/2 lg:w-1/4 my-8 md:my-2 mx-auto text-center md:text-left text-grey-lightest">
        <p className="font-medium text-white mb-2 text-xl">Contacto</p>
        <p className="font-light">hola[at]ubankapp.com <br/>
        +555281070021</p>
        <p className="font-light pt-4"><span className="font-medium text-white">Estados Unidos</span><br/>
        334 Blackwell Street<br/>
        Durham, NC</p>
        <p className="font-light pt-4"><span className="font-medium text-white">México</span><br/>
        Chihuahua 230, Roma Norte<br/>
        CDMX, DF</p>
        <p className="font-light pt-4"><span className="font-medium text-white">Chile</span><br/>
        Carlos Antúnez 1843, Oficina 607<br/>
        Providencia, Santiago</p>
      </div>

      <div className="sm:w-1/2 lg:w-1/4 my-8 md:my-2 mx-auto text-center md:text-left text-grey-lightest">
      <p className="font-medium text-white text-xl pb-2">Legal</p>
      <ul className="list-reset font-light">
        <li>Aviso de Privacidad</li>
        <li>Términos y condiciones</li>
        <li>Seguridad</li>
      </ul>
      </div>
      
      <div className="text-grey-lightest sm:w-1/2 lg:w-1/4 text-center mx-auto text-center my-8 md:my-2">Descubre nuevas formas de ahorrar en nuestras redes sociales.
          <div className="flex justify-center items-center mx-auto text-center">
          <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><a href="https://twitter.com/ubankapp" target="_blank" className="no-underline text-white hover:text-grey-lighter hover:border-white hover:border-b-2"><FaTwitter className="mb-4"/></a></div>
          <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><a href="https://facebook.com/ubanklatam" target="_blank" className="no-underline text-white hover:text-grey-lighter hover:border-white hover:border-b-2"><FaFacebookOfficial className="mb-4"/></a></div>
          <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><a href="https://instagram.com/ubank_app/" target="_blank" className="no-underline text-white hover:text-grey-lighter hover:border-white hover:border-b-2"><FaInstagram className="mb-4"/></a></div>
            <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><FaYoutubePlay className="mb-4" /></div>
          </div>
      </div>
    </div>
  </div>
);

export default Footer;
