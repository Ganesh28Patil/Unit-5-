import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import Cards from './Cards';
import Sdata from './sData';
// console.log('Sdata:', Sdata,Sdata.length)

// using simple function to pass component

// function ncard(val){
//   // console.log(val);
//   return(
//     <Cards 
//       imgscr = {val.imgscr} title = {val.title}
//       sname = {val.sname} links= {val.links}
//     />
//   );
// }

// array.map(function(currentValue,index,arr),thisValue);  // syntax for arrow function


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
 <>
    <h1 className='heading_style'>List of Top 5 Netflix Series in 2020</h1>
        {/* {Sdata.map(ncard)}   */}
        
        {/* using FAT ARROW Function to pass component */}

        {Sdata.map((val,index) =>{
          return (
            <Cards
                imgscr = {val.imgscr} title = {val.title}
                sname = {val.sname} links= {val.links}
            />
          )
        })}
 </>

 
);


reportWebVitals();
