import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './Robot'
import CardList from './CardList'

ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));



registerServiceWorker();
