import React from 'react';
import logo from 'images/A-logo-for-a-fast-food-brand.png';
import './Footer.css';

const Footer = ({
    // imglogo = {logo}

}) => (
    <footer className='footer'>
      <img className='footer_logo' src={logo} width="100" />
      <p className='footer_p'>This Website was made by <a className='footer_a' href="https://discord.com/users/1172955093189009448" target="_blank">Alex Lysov /// kovese</a> in 2025 <br/> All copy rights reserved© </p>
      </footer>
  );




  export default Footer;