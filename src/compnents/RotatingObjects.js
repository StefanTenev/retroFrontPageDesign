import React from 'react';
import FruitCrate from './FruitCrate';
import './RotatingObjects.css';



function RotatingObjects() {
    return (
      <div className="RotatingObjects">
        <FruitCrate name="Leonid Yovchev"/>
        <FruitCrate name="Kitodar Todorov"/>
      </div>
    );
  }
  
  export default RotatingObjects;
  