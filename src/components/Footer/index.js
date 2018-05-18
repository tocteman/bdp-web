import React from "react";
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FintechWinner from '../../img/footer/fintech.jpg'



const Footer = () => (
  <div className="bg-grey-darkest">
    <div className="text-center sm:text-left sm:flex justify-around items-center max-w-xl mx-auto p-4 md:p-4">
      <div className="md:w-1/3 mx-auto text-center">
        <p className="text-white font-medium no-underline text-grey-lightest leading-normal">© 2016 - 2017 Übank App <br/>
        <span className="text-grey-light">Millennial Fintech Services LLC.</span> <br/>
        <span className="text-grey-dark">334 Blackwell St, Durham, NC 27701</span> </p>
    </div>
      <div className="flex justify-center items-center text-white w-1/3 text-center mx-auto text-center my-8 md:my-2">
        <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><FaTwitter /></div>
        <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><FaFacebookOfficial /></div>
        <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><FaInstagram /></div>
        <div className="m-4 text-xl cursor-pointer hover:text-grey-lighter"><FaYoutubePlay /></div>
      </div>
      <div className="w-1/3 my-8 md:my-2 mx-auto text-center">
        <img src={FintechWinner} width="150"/>
      </div>
    </div>
  </div>
);

export default Footer;
