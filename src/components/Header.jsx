import React from 'react';
import logo from 'images/A-logo-for-a-fast-food-brand.png';

const Header = ({
    imglogo = {logo}

}) => (
    <Header>
      <img src={logo} width="640" />
      <button>Home</button>
      <button>About us</button>
      <button>Delivery</button>
      <button>Contacts</button>
      </Header>
  );




  export default Header;