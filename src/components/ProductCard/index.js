"use client";

import { useState } from "react";
import Image from "next/image";
import "./ProductCard.css";

const ProductCard = ({ product }) => {

  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  return (
    <div className="product-card">
      <div className="product-img">
        <Image
          src={product.image ? product.image : ""}
          alt={product.title}
          fill
        />
      </div>
      <div className="product-info">
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-desc">
            Sign in or Create an account to see pricing
          </p>
        </div>
        <Image
          src={
            isWishlistClicked
              ? "/icons/wishlistFilled.svg"
              : "/icons/wishlist.svg"
          }
          alt="wishlist-icon"
          height={24}
          width={24}
          className="wishlist-icon"
          onClick={() => setIsWishlistClicked(!isWishlistClicked)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
