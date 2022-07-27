import React, { useEffect, useState } from "react";
import CountryCart from "../../components/country cart/CountryCart";
import Search from "../../components/search/Search";
import "./allCountries.css";
import { Link } from "react-router-dom";
function AllCountries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState("");

  const ENDPOINT = "http://localhost:3000/";

  useEffect(() => {
    const allCountries = async () => {
      try {
        setLoading("Loading");
        const response = await fetch(`${ENDPOINT}all`);
        const allcountries = await response.json();
        setCountries(allcountries);
        setLoading("completed");
      } catch (error) {
        console.log(error);
      }
    };

    allCountries();
  }, []);
  useEffect(() => {
    const allCountries = async () => {
      try {
        setLoading("Loading");
        const response = await fetch(`${ENDPOINT}region/${region}`);
        const allcountries = await response.json();
        setCountries(allcountries);
        setLoading("completed");
      } catch (error) {
        console.log(error);
      }
    };

    allCountries();
  }, [region]);

  useEffect(() => {
    const allCountries = async () => {
      try {
        setLoading("Loading");
        const response = await fetch(`${ENDPOINT}name/${region}`);
        const allcountries = await response.json();
        setCountries(allcountries);
        setLoading("completed");
      } catch (error) {
        console.log(error);
      }
    };

    allCountries();
  }, [region]);



  useEffect(() => {
    const allCountries = async () => {
      try {
        setLoading("Loading");
        const response = await fetch(`${ENDPOINT}name/${searchTerm}`);
        const allcountries = await response.json();
        setCountries(allcountries);
        setLoading("completed");
      } catch (error) {
        console.log(error);
      }
    };

    allCountries();
  }, [searchTerm]);

  console.log(countries);

  return (
    <div>
      <Search setRegion={setRegion} setSearchTerm={setSearchTerm} />
      <div className='countries'>
        {countries.map((country, index) => {
          return <CountryCart countryInfos={country} />;
        })}
      </div>
    </div>
  );
}

export default AllCountries;
