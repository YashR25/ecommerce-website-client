import React, { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";
import "./Home.scss";
import { axiosClient } from "../../utils/axiosClient";

function Home() {
  const [categories, setCategories] = useState(null);

  const [topProduct, setTopProducts] = useState(null);

  async function fetchData() {
    const categoryResponse = await axiosClient.get(
      "/categories?populate=image"
    );
    const topProductResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );

    setCategories(categoryResponse.data.data);
    setTopProducts(topProductResponse.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);
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
          {categories?.map((category) => {
            return <Category category={category} />;
          })}
        </div>
      </section>
      <section className="collection container">
        <div className="info">
          <div className="heading">Our Top Picks</div>
          <p className="subheading">All New Designs, Same Old Details.</p>
        </div>
        <div className="content">
          {topProduct?.map((product) => {
            return <Product product={product} key={product.attributes.key} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
