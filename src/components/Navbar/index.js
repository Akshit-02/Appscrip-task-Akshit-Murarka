"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import { convertToKebabCase } from "@/utils/helper";
import { useState } from "react";

const pages = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

const icons = [
  { src: "/icons/search.svg", alt: "search-icon" },
  { src: "/icons/wishlist.svg", alt: "wishlist-icon" },
  { src: "/icons/cart.svg", alt: "cart-icon" },
  {
    src: "/icons/profile.svg",
    alt: "profile-icon",
    className: "profile-icon",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="hamburger-logo">
          <div className="hamburger-menu">
            <button
              className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {isMenuOpen && (
              <nav className="menu">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        </div>
        <h1 className="logo-text">LOGO</h1>
        <div className="navbar-actions">
          {icons.map((icon, index) => (
            <Image
              key={index}
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className={`action-icon ${icon.className || ""}`}
            />
          ))}
          <select name="language" id="language" className="language-selector">
            <option value="ENG">ENG</option>
            <option value="HIN">HIN</option>
          </select>
        </div>
      </div>
      <div className="pages-list">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={`/${convertToKebabCase(page)}`}
            className="page-link"
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
