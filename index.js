

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import Learn from './component/Learn';
//import HomePage from './component/Homepage';
//import Playgame from './component/Playgame';
//import Profile from './component/Profile';
import Wallet from './component/Wallet';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Learn></Learn> */}
    {/*<Playgame></Playgame>*/}
      {/*<HomePage></HomePage>*/}
       {/*<Profile></Profile>*/}
       <Wallet></Wallet>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


