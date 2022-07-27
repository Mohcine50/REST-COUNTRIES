import React, { useEffect } from "react";
import "./singleCountry.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function SingleCountry() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const obj = Object.keys(state.countryInfos.name.nativeName);

  const currenciesObj = Object.keys(state.countryInfos.currencies);

  const languagesObj = Object.keys(state.countryInfos.languages);

  console.log(languagesObj);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  return (
    <div className='singleCountry'>
      <div className='back' onClick={() => navigate(-1)}>
        <ion-icon name='arrow-back'></ion-icon>
        <span>Back</span>
      </div>
      {/* <div className='container'> */}
      <div className='infos'>
        <div className='img'>
          <img src={state.countryInfos.flags.png} alt='Coyntry flag' />
        </div>
        <div className='country-infos'>
          <div className='deatails'>
            <div className='main-infos'>
              <p id='country-name'>{state.countryInfos.name.official}</p>
              <p>
                <span>Native Name: </span>
                {state.countryInfos.name.nativeName[obj[0]].official}
              </p>
              <p>
                <span>Population: </span>
                {state.countryInfos.population}
              </p>
              <p>
                <span>Region: </span>
                {state.countryInfos.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {state.countryInfos.subregion}
              </p>
            </div>
            <div className='more-infos'>
              <p>
                <span>Top Level Domain: </span>
                {state.countryInfos.tld[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {state.countryInfos.currencies[currenciesObj[0]].name}
              </p>
              <p>
                <span>Languages: </span>
                {languagesObj.map((language) => {
                  return (
                    <p id='language'>
                      {state.countryInfos.languages[language]},{" "}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
          <div className='border-countries'>
            <p>Border Countries:</p>
            <ul id='wraper-list'>
              {state.countryInfos.borders.map((border) => {
                return <li>{border}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default SingleCountry;
