import React from 'react';
import './Hello.css'
import './tachyons.css'

const Hello = (props) => {
    
        return(
          // This html like stntax is called JSX when within a class
          /** React uses JSX to create their fake DOM */
          <div class ='f1 tc pd1'>
            <h1>Hello React.js</h1>
            <p>{props.greeting}</p>
          </div>
        );
    
}

export default Hello;
