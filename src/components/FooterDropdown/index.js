"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./FooterDropdown.css";

const FooterDropdown = ({ links, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="links-container-wrapper">
      <h4
        className="header-mobile"
        style={{ textTransform: "none" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        <Image
          src={"/icons/arrowDownWhite.svg"}
          alt="arrow"
          height={20}
          width={20}
          className={`${isExpanded ? "arrow-up" : "arrow-down"}`}
        />
      </h4>
      {isExpanded && (
        <div className="links-list-mobile">
          {links.map((item, index) => (
            <Link href={item.link} key={index} className="links-mobile">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterDropdown;
