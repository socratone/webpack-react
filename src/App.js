import React from 'react';
import './App.scss';
import Image from './image.png';

const App = () => {
  return (  
    <>
      <p>
        hello world
      </p>
      <img src={Image} alt="그림" />
    </>
  );
}
 
export default App;