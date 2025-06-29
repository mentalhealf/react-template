import React from 'react';
import './Drinks.css';


const Drinks = ({
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  price,
}) => (
  <div className="drinks_card">
    <img className="drinks_img" src={imgUrl} alt={name} />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button" className="drinks_btn">
      Add to cart
    </button>
  </div>
);

export default Drinks;
