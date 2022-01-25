import './index.css'
import React from 'react';
import CountriesComponent from './component/Component';
import { Routes ,Route, Link } from 'react-router-dom';
import TableHeader from './component/TableHeader';
import CardStyle from './component/CardStyle';

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
                <Link to="/CardStyle">Card view</Link>
              </li>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/TableHeader" element={<TableHeader/>}/>
                      
            <Route path="/CardStyle" element={<CardStyle/>}/>
                        
            <Route path="/CountriesComponent" element= {<CountriesComponent/>}/>
            
            </Routes>
        </div>
   );
  };
  
export default ToRoutering;
