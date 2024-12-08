"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./ProductsList.css";
import ProductCard from "@/components/ProductCard";
import FiltersList from "@/components/FiltersList";

const sortingOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const ProductsList = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [selectedSorting, setSelectedSorting] = useState("RECOMMENDED");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        console.log("Error fetching products");
      }
      const data = await response.json();
      setListProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSortingChange = (sortType) => {
    setSelectedSorting(sortType);
  };

  const toggleFilter = () => setShowFilter(!showFilter);

  return (
    <div className="products-list-container">
      <div className="heading">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className="filter-container">
        <div className="filter-info">
          <h4 className="product-count">{listProducts.length || "0"} ITEMS</h4>
          <p className="filter" onClick={toggleFilter}>
            <Image
              src={
                showFilter ? "/icons/leftArrow.svg" : "/icons/rightArrow.svg"
              }
              alt={showFilter ? "Hide filter" : "Show filter"}
              width={16}
              height={16}
            />
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </p>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            {selectedSorting}
            <Image
              src="/icons/downArrow.svg"
              alt="down-arrow"
              height={16}
              width={16}
            />
          </button>
          <div className="dropdown-content">
            {sortingOptions.map((sortType) => (
              <a
                key={sortType}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSortingChange(sortType);
                }}
                className={selectedSorting === sortType ? "selected" : ""}
              >
                {sortType}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="filter-container-mobile">
        <div className="filter-bar">FILTER</div>
        <div className="dropdown">
          <button className="dropbtn">
            {selectedSorting}
            <Image
              src="/icons/downArrow.svg"
              alt="down-arrow"
              height={16}
              width={16}
            />
          </button>
          <div className="dropdown-content">
            {sortingOptions.map((sortType) => (
              <a
                key={sortType}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSortingChange(sortType);
                }}
                className={selectedSorting === sortType ? "selected" : ""}
              >
                {sortType}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="products-container">
        {showFilter && <FiltersList />}
        <div className="products-list">
          {loading ? (
            <p>Loading...</p>
          ) : (
            listProducts.map((product, index) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
