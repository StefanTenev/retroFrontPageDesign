import React from 'react';
import ReactDOM from 'react-dom/client';
import './FruitCrate.css';
import Actor from './Actor';


function FruitCrate(props) {
    
    return (
      <div className="FruitCrate">
        <div className="sketchfab-embed-wrapper"> 
      <iframe 
      title="Plastic-fruit-crate" 
      frameBorder="0" 
      allowFullScreen 
      mozallowfullscreen="true" 
      webkitallowfullscreen="true" 
      allow="autoplay; fullscreen; xr-spatial-tracking" 
      xr-spatial-tracking 
      execution-while-out-of-viewport 
      execution-while-not-rendered 
      web-share 
      src="https://sketchfab.com/models/4028063240684c2fb5c707a10a04ab71/embed?autospin=1&autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_loading=0"> 
      </iframe> 
      </div>
      </div>
    );
  }
  
  export default FruitCrate;
  