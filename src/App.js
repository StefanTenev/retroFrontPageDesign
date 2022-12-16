
import './App.css';
import Header from './compnents/Header';
import React from 'react';
import RotatingObjects from './compnents/RotatingObjects';
import Actor from './compnents/Actor';
import zucc2 from './zucc2.jpg'

function App() {
  const [state, setState] = React.useState({
    secOnes: 0,
    secTens: 0,
    min: 0,
    hrs: 0
  })
  let date = new Date();
  let secondsOnes = 0;
  let secondsTens = 0;
  let minutes = 0;
  let hours = 0;
  
  function trackUserStay(){
    if(secondsTens == 5 && secondsOnes == 9){
      secondsOnes = 0
      secondsTens = 0
      minutes++
    }else{
      secondsOnes++
    }
    if(secondsOnes > 9){
      secondsOnes = 0
      secondsTens++
    }
    if (minutes == 59){
      minutes = 0;
      hours++
    }
    
    
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      trackUserStay()
      setState({
        secOnes: secondsOnes,
        secTens: secondsTens,
        min: minutes,
        hrs: hours
      })
    }, 1000)

    return () => clearInterval(interval)
  },[])
  

  

  
  return (
    <div className="App">
      
      <div className="whiteLine"></div>
      <h4>PLAY<span>▶</span></h4>
      <Header/>
      <RotatingObjects />
      <h3>starring</h3>
      <div className="actorsContainer">
        <Actor imbd="https://www.imdb.com/name/nm2977245/" name="Leonid Yovchev"/>
        <Actor imbd="https://www.imdb.com/name/nm1242398/" name="Kitodar Todorov "/>
      </div>
      <div className="vhs-time-track">
      <div>{date.getMonth == 1 ? 'JAN'
            : date.getMonth == 2 ? 'FEB'
            : date.getMonth == 3 ? 'MAR'
            : date.getMonth == 4 ? 'APR'
            : date.getMonth == 5 ? 'MAY'
            : date.getMonth == 6 ? 'JUN'
            : date.getMonth == 7 ? 'JUL'
            : date.getMonth == 8 ? 'AUG'
            : date.getMonth == 9 ? 'SEPT'
            : date.getMonth == 10 ? 'OCT'
            : date.getMonth == 11 ? 'NOV'
            : 'DEC' }. {date.getDate()} {date.getFullYear()}
            </div>
        <div>{state.hrs}:{state.min}:{state.secTens}{state.secOnes}</div>
      </div>
      <p className="intro">a short film by Kristiyan Petrov</p>
    </div>
  );
}

export default App;
