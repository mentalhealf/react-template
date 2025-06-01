import React from 'react';
import './Dessert.css'


const Dessert = ({
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  price,
}) => (
  <div className='dessert_card'>
    <img className='dessert_img' src={imgUrl} alt={name} />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button" className='dessert_btn'>Add to cart</button>
  </div>
);



export default Dessert;