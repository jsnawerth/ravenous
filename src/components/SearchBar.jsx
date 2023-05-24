import React, { useEffect, useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ searchYelp }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      let className = sort === sortByOptionValue ? "active" : "";
      return (
        <li
          key={sortByOptionValue}
          className={className}
          onClick={() => {
            setSort(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  // useEffect(() => console.log(term, location, sort), [term, location, sort]);

  return (
    <div className='searchBar'>
      <div className='filters'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchYelp(term, location, sort);
        }}
      >
        <div className='search'>
          <input
            id='term'
            type='text'
            placeholder='Search Business'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <input
            id='location'
            type='text'
            placeholder='Where?'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className='submitButton'>
          <button>Let's Go</button>
        </div>
      </form>
    </div>
  );
}
