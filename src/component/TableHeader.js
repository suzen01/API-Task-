import Table from './Table';
import '../index.css'
import React from 'react';


function TableHeader() {
    return (
    <div >
        <div>
              <h1> " Table VIEW for COUNTRIES " </h1>
        </div>
         <div > 
         <table className='tableHeaderStyle'>
         <thead>
                     <tr >
           <th>    </th>
           <th > name  </th> 

           <th >  capital  </th> 
          
           <th> region   </th> 
           
           <th> population  </th> 
           </tr>
          </thead>
         <tbody>
         <Table/>
         </tbody>
          </table>
            

         </div>
  </div>
     ) };
    
export default TableHeader;