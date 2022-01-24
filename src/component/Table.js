import React, {useEffect, useState} from 'react';
import  "../index.css";
import TableHeader from './TableHeader';
const Table = () => {

  const [countriesState, setCountriesState] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => {
       
   const newCountriesState = countriesArray.map((countries,index) => {
          return (
            <div key={index} >
            <div>
              <div>
               <table className='tableStyle'>
                <thead></thead>
                <tbody>
                <tr>
                 {<td> <img src={countries.flag} className='imageClassTable'/></td>}
                 <td> <div className='name'> {countries.name} </div> </td>
                 <td> <div className='centerClass'> {countries.capital}   </div></td> 
                 <td> <div className='centerClass'> {countries.region}    </div></td>
                 <td> <div className='centerClass'> {countries.population}   </div> </td>
            
                </tr>
                </tbody>
               </table>
             </div>
           
            </div></div>
            )
        });
        setCountriesState(newCountriesState);
       })
      }, []);
    
  return countriesState;
    } 
export default Table;
