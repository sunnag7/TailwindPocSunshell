import React from 'react';

const Footer = () => (
  <footer className="p-3 text-white text-center">
    <div className="max-w flex flex-wrap items-center justify-center">
      <p className="font-avenir text-sm">© LighiLighth 2021. Allrights reserved, Term of Use | Privacy Policy</p>
      
    </div>
    <ul className="social-icons flex flex-wrap justify-end flex flex-row my-auto text-2xl mx-auto md:mx-0">
        <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
        <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
      </ul>
  </footer>
);

export default Footer;
