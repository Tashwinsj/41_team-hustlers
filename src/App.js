import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter ,Routes , Route} from "react-router-dom" ;
import Home from './comp/Home';
import Header from './comp/header';
import Feature from './comp/feature';
function App() {
  return (
    <div className='all'>
    <Header/>
     <Feature/>
     <Feature/>
     <Feature/>
     <Feature/>
     <Feature/>
     <Feature/>
     <Feature/>
     <Feature/>

    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
         
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
