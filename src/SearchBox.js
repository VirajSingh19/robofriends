import React from 'react';
import './tachyons.css';

const SearchBox = () =>{

    return(
        <div className="pa2">
             <input className='pa3 ba b--green bg-lightest-blue'
              type='search' 
              placeholder="Searhc for Robots"
              />
        </div>
    );
} 

export default SearchBox;