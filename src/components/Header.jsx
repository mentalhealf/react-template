import React from 'react';
import logo from 'images/A-logo-for-a-fast-food-brand.png';

const Header = ({
    // imglogo = {logo}

}) => (
    <header>
      <img className='header_logo' src={logo} width="156" />
      <ul className='header_list'>
        <li className='header_item'><a className='header_link' href="#">Home</a></li>
        <li className='header_item'><a className='header_link' href="#">About us</a></li>
        <li className='header_item'><a className='header_link' href="#">Delivery</a></li>
        <li className='header_item'><a className='header_link' href="#">Contacts</a></li>
      </ul>
      </header>
  );




  export default Header;