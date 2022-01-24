import React, {useEffect, useState} from 'react';
import  "../index.css"


const Card = () => {
 
  const [countriesState, setCountriesState] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => {
        const newCountriesState = countriesArray.map((countries, index, name) => {
         // thank you 
          return (
           <div key={index} >
                
            <div  className='cardCountener' >
            <img src={countries.flag} className='imageClass'/>
            <div className='name'>name: {countries.name}, </div> 
            <div> capital: {countries.capital} ,</div>  
            <div> region: {countries.region} ,</div> 
                 population: {countries.population}
        
           </div>
           
           </div>
           //<div className={style.gridContainer}>

          )
        });
        setCountriesState(newCountriesState);
      })
      }, []);
  return countriesState;
    } 
export default Card;
