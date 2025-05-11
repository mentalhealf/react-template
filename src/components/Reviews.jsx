import React from 'react';
import './Reviews.css';

const Review = ({
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name,
  text,
  rating
}) => (
  <div className="review_card">
    <img className="review_img" src={imgUrl} alt={name} />
    <h2>{name}</h2>
    <p>Review: {text}$</p>
    <p>Rating: {rating}</p>
  </div>
);


export default Review;

