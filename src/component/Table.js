import React, {useEffect, useState} from 'react';
import  "../index.css"

const Table = () => {
 
  const [countriesState, setCountriesState] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((countriesArray) => {
        const newCountriesState = countriesArray.map((countries, index, name) => {
         
          return (
           <div key={index} >
                
            <div>
         <table className='tableStyle'>
            <thead>
              <tr>
               <th className='padd'>flag:  </th> 
               <th className='padd'>name:   </th> 
               <th className='padd'>capital:  </th> 
               <th className='padd'>region:</th> 
               <th className='padd'>population:</th> 
              </tr>
              
             </thead>
         <tbody>
            <tr>
              <td className='padd'> <img src={countries.flag} className='imageClassTable'/></td>
              <td className='paddName'> <div className='name'> {countries.name}    </div> </td>
              <td className='padd'> <div  className=''> {countries.capital}   </div></td> 
              <td className='padd'> <div> {countries.region}    </div></td>
              <td className='padd'> <div> {countries.population}   </div> </td>
            </tr>
          </tbody>
          </table>
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
export default Table;
