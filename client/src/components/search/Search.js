import React, { useState } from "react";
import "./search.css";

function Search({ setRegion, setSearchTerm, }) {
  const [search, setSearch] = useState("");

  const hadnleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm(search);
    setSearch("");
  };

  return (
    <div className='search'>
      <div className='container'>
        <form onSubmit={hadnleSubmit}>
          <ion-icon name='search'></ion-icon>
          <input
            type='text'
            value={search}
            placeholder='Search for a country...'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <select
          name='region'
          id='region'
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option selected hidden>
            Filter by Region
          </option>
          <option className='options' value='Africa'>
            Africa
          </option>
          <option className='options' value='America'>
            America
          </option>
          <option className='options' value='Asia'>
            Asia
          </option>
          <option className='options' value='Europe'>
            Europe
          </option>
          <option className='options' value='Oceania'>
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
}

export default Search;
