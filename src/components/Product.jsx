import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  price,
}) => (
  <div className="product_card">
    <img className="product_img" src={imgUrl} alt={name} />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button" className="product_btn">
      Add to cart
    </button>
  </div>
);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
