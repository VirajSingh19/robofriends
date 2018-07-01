import React from 'react';
import './tachyons.css';
import './SearchBox.css'

const SearchBox = ({searchfield,searchChange}) =>{

    return(
        <div className="pa2">
             <input  className='pa3 ba b--black bg-lightest-blue bw2 br4'
              type='search' 
              placeholder="Search for Robots"
              onChange={searchChange}
              />
        </div>
    );
} 

export default SearchBox;