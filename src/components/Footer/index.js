import React from "react"
import Link from "gatsby-link"
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FintechWinner from '../../img/footer/fintech.jpg'



const Footer = () => (
  <div className="bg-piedra-very-dark text-piedra-lightest py-4 leading-normal w-full">
    <div className="text-piedra-very-light max-w-lg text-center mx-auto">
      <div className="flex justify-around">
      <div className="text-piedra-very-light no-underline hover:text-white" target="_blank">Meta BdP, powered by <em>Übank</em></div>
      <div>
        <Link to="legal">
          <div className="text-piedra-very-light hover:text-white no-underline">
            Legal
          </div>
        </Link>
      </div>
      </div>
    </div>
  </div>
);

export default Footer;
