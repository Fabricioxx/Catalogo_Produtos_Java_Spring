import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './RoutersConfig';

function App() {

  return (


    <div className="App">
     
    <BrowserRouter>
    
        <RoutesConfig />
                
    </BrowserRouter>
  
    </div>
  );
}

export default App;