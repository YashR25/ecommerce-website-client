import React from "react";
import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <div className="heading">Shop By Categories</div>
          <p className="subheading">
            Shop from the best, our Film and TV Posters Collection.
          </p>
        </div>
        <div className="content">
          <Category />
          <Category />
          <Category />
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <div className="heading">Our Top Picks</div>
          <p className="subheading">All New Designs, Same Old Details.</p>
        </div>
        <div className="content">
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
