import React from 'react';
import {robots} from './Robot';
import CardList from './CardList';
import SearchBox from './SearchBox';

import './tachyons.css';
// States -> Props


const state = {

}



const App = () =>{
return(
<div className='tc'>

<h1>Robo friends</h1>
<SearchBox/>
<CardList robots={robots} />


</div>
);

}


export default App;