import React from 'react';
import Product from './components/Product';
import kfc from './images/kfc.png';
import zinger from './images/zinger.jpg';
import Aboutus from './components/About_us';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/Main.css';
import Review from './components/Reviews';
import Oleg from './images/Oleg.jpg';
import Ivan from './images/Ivan.png';
import Mariana from './images/Mariana.png';
import Dessert from 'components/Dessert';
import chocolate_icecream from './images/chocolate_icecream.jpg';
import oreo_milkshake from './images/cholate_oreo_milkshake.jpg';
import Donut from './images/Donuts.jpg';

export const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1 className="product_best">Best selling products</h1>
        <div className="product_list">
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
      <div className="container">
        <Aboutus></Aboutus>
        <div className="review_container">
          <Review
            imgUrl={Oleg}
            name="Oleg"
            rating="5⭐//5⭐"
            text="I like this restourant because.It is very healthy, as im bery strict with my diet."
          />

          <Review
            imgUrl={Ivan}
            name="Ivan"
            rating="5⭐//5⭐"
            text="I LIKE TO CHEAT ON MY DIET!"
          />

          <Review
            imgUrl={Mariana}
            name="Mariana"
            rating="5⭐//5⭐"
            text="Friendly service, clean atmosphere, fast and flavorful food—this standout fast food spot feels more like a cozy, high-quality café."
          />
        </div>
        <h1 className="dessert_h1">Our Deserts</h1>
        <div className="dessert_list">
          <Dessert
            imgUrl={chocolate_icecream}
            name="Chocolate icecream"
            price={'3'}
          />

          <Dessert imgUrl={oreo_milkshake} name="Oreo milkshake" price={'4'} />

          <Dessert imgUrl={Donut} name="Donut" price={'2'} />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};
