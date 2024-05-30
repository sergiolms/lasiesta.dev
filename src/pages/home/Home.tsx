import React from 'react';
import sleepGif from '../../images/sleep.gif';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sleepGif} className='App-logo' alt='Let him cook'/>
        <p>En proceso, no me estreses...</p>
      </header>
    </div>
  );
}

export default Home;
