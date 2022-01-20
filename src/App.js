import './index.css'
import React from 'react';
import Card from './component/Card';
import CountriesComponent from './component/Component';
import Table from './component/Table'

function App() {
   return (
    <div >
        <div>
           <h1> " VIEW COUNTRIES " </h1>
        </div>
        <div className='container'>

         </div>
         <div> 
          <table className='tableHeaderStyle'>
          <thead>
           <tr >
          <th>    </th>
           <th > name  </th> 
         
           <th >  capital  </th> 
           <br/>
           <th> region   </th> 
           <br/>
           <th> population  </th> 
          </tr>
          </thead>
          </table>
            <Table/>
            
            
         </div>
          
        
      

  
    </div>


  );
    
}


export default App;
