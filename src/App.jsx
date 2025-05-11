import React from 'react';
import Product from './components/Product';
import kfc from './images/kfc.png';
import zinger from './images/zinger.jpg';
import Aboutus from './components/About_us';
import Header from './components/Header'
import Footer from './components/Footer'
import './components/Main.css'
import Review from './components/Reviews'
import Oleg from './images/Oleg.jpg'

export const App = () => {
  return (
    <div>
     
      <Header></Header>
      <div className='container'>
      <h1 className='product_best'>Best selling products</h1>
      <div className='product_list'>
      <Product
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        name="Fries and Burger"
        price={14.29}
      />
      <Product
        imgUrl={kfc}
        name="9 piece of Chiken and Drumsticks"
        price={14.99}
      />
      <Product
        imgUrl={zinger}
        name="zinger the original recipe"
        price={6.99}
      />
      </div>
      </div>
      <Aboutus></Aboutus>

      <Review
      imgUrl={Oleg}
      name='Oleg'
      rating='5⭐//5⭐'
      text='I like this restourant because.It is very healthy, as im bery strict with my diet.'
      
      />
      
      <Footer></Footer>
    </div>

  );
};
