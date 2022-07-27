import React from "react";
import { Link } from "react-router-dom";
import "./CountryCart.css";
function CountryCart({ countryInfos }) {
  return (
    <div className='countryCarts'>
      <Link
        state={{ countryInfos }}
        to={{
          pathname: `/${countryInfos.name.common}`,
        }}
      >
        <img src={countryInfos.flags.png} alt='country-flas' />
      </Link>
      <div className='details'>
        <p id='country-name'>{countryInfos.name.official}</p>
        <p>
          <span>Population: </span>
          {countryInfos.population.toLocaleString()}
        </p>
        <p>
          <span>Region: </span>
          {countryInfos.region}
        </p>
        <p>
          <span>Capital: </span>
          {countryInfos.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCart;
