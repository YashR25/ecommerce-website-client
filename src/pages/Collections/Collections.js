import React, { useEffect, useState } from "react";
import "./Collections.scss";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { axiosClient } from "../../utils/axiosClient";

function Collections() {
  const [categories, setCategories] = useState(null);
  const [categoryId, setCategoryId] = useState();
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  const sortOption = [
    {
      value: "Price-Low-To-High",
      sort: "price",
    },
    {
      value: "Newest First",
      sort: "createdAt",
    },
  ];

  const [sortBy, setSortBy] = useState(sortOption[0].sort);

  const params = useParams();

  async function fetchData() {
    const url = params.categoryId
      ? `/products?filters[category][key][$eq]=${params.categoryId}&populate=image&sort=${sortBy}`
      : `/products?populate=image&sort=${sortBy}`;
    // console.log(url);
    const productResponse = await axiosClient.get(url);
    const categoryResponse = await axiosClient.get(`/categories`);

    setCategories(categoryResponse.data.data);

    setProducts(productResponse.data.data);
    console.log(productResponse);
  }

  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchData();
  }, [params, sortBy]);

  function handleSortCategory(e) {
    const sortKey = e.target.value;
    setSortBy(sortKey);
  }

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
              <select
                className="select-sort-by"
                name="sort-by"
                id="sort-by"
                onChange={handleSortCategory}
              >
                {sortOption.map((item) => {
                  return <option value={item.sort}>{item.value}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories?.map((item) => {
                return (
                  <div
                    key={item}
                    className="filter-radio"
                    onClick={() => navigate(`/category/${item.attributes.key}`)}
                  >
                    <input
                      name="category"
                      type="radio"
                      value={item.attributes.title}
                      id={item.id}
                      checked={item.attributes.key === categoryId}
                    />
                    <label htmlFor={item.attributes.title}>
                      {item.attributes.title}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-box">
            {products?.map((product) => (
              <Product key={product.attributes.key} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
