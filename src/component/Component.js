import React, {useEffect, useState} from 'react';


const CountriesComponent = () => {
  const [countriesState, setCountriesState] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => {
        const newCountriesState = countriesArray.map((countries, index) => {
          return (

            <div key={index}>
           <div>{countries.name} , {countries.capital}</div>
           <div>{countries.} , {countries.} </div>
                             </div>

          )
        });
        setCountriesState(newCountriesState);
      })

  }, []);
  return countriesState;
};
export default CountriesComponent;