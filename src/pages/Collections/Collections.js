import React, { useEffect, useState } from "react";
import "./Collections.scss";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";

function Collections() {
  const categories = ["type1", "type2", "type3"];
  const [categoryId, setCategoryId] = useState();

  const params = useParams();

  useEffect(() => {
    setCategoryId(params.categoryId);
  }, [params]);

  return (
    <div className="Collections">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print and Artwork</h2>
            <p>
              India's largest collection of wall posters for your bedroom,
              living room, kids room, kitchen and posters & art prints at
              highest quality lowest price guaranteed.
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <h3 className="sort-by-text">Sort By</h3>
              <select className="select-sort-by" name="sort-by" id="sort-by">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => {
                return (
                  <div key={item} className="filter-radio">
                    <input
                      name="category"
                      type="radio"
                      value={item}
                      id={item}
                      checked={item === categoryId}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
