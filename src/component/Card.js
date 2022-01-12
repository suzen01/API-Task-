import React, {useEffect, useState} from 'react';
import "../index.css"

const Card = () => {
  const [countriesState, setCountriesState] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => {
        const newCountriesState = countriesArray.map((countries, index) => {
          return (
           <div key={index}>
                
           <div>
           
            <img src={countries.flag}
              alt="altrnative text" 
              style={{width: 200, height: 200, left:100 }}/>
             <div className='name'>name:{countries.name}, </div> 
             <div> capital:{countries.capital} ,</div>  
             <div> region:{countries.region} ,</div> 
              population:{countries.population}
        
           </div>
           
           </div>

          )
        });
        setCountriesState(newCountriesState);
      })
      }, []);
  return countriesState;
    } 
export default Card;
