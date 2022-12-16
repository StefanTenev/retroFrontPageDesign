import React from 'react';
import ReactDOM from 'react-dom/client';
import './Actor.css'



function Actor(props) {
    
    return (
      <div className="Actor">
        <p><a href={props.imbd} target="_blank">{props.name}</a></p>
      </div>
    );
  }
  
  export default Actor;
  