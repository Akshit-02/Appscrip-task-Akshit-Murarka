"use client";

import { useState } from "react";
import Image from "next/image";
import "./Filters.css";

const Filter = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <div className="filter-wrapper">
      <p className="filter-title" onClick={() => setIsExpanded(!isExpanded)}>
        {data.name}
        <Image
          src="/icons/downArrow.svg"
          alt="arrow"
          height={16}
          width={16}
          className={`${isExpanded ? "arrow-up" : "arrow-down"}`}
        />
      </p>
      <div className="filter-options">
        <p className="select-all">All</p>
        {isExpanded && (
          <>
            <p className="unselect-all" onClick={() => setSelectedOptions([])}>
              Unselect All
            </p>
            {data.options.map((subOption, index) => (
              <div key={index} className="sub-option">
                <input
                  type="checkbox"
                  id={subOption}
                  name={subOption}
                  checked={selectedOptions.includes(subOption)}
                  onChange={() =>
                    setSelectedOptions([...selectedOptions, subOption])
                  }
                />
                <label htmlFor={subOption}>{subOption}</label>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
