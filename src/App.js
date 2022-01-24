import './index.css'
import React from 'react';
import Card from './component/Card';
import CountriesComponent from './component/Component';
// import Table from './component/Table'
import { Routes ,Route, Link } from 'react-router-dom';
import TableHeader from './component/TableHeader';

function ToRoutering (){

   return (
     
          <div>
          <nav>
            <ul>
              <li>
                <Link to="/CountriesComponent">Home</Link>
              </li>
              <li>
                <Link to="/TableHeader">table view</Link>
              <li>
                <Link to="/Card">Card view</Link>
              </li>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/TableHeader" element={<TableHeader/>}/>
                      
            <Route path="/Card" element={<Card/>}/>
                        
            <Route path="/CountriesComponent" element= {<CountriesComponent/>}/>
            
            </Routes>
        </div>
   );
  };
  


export default ToRoutering;
