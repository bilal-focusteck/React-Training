import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  [
    <h1>Hello World</h1>,
    <p>This is my first react test app</p>,
    <h2>Hello World 2</h2>
  ]
);


/* if we want to write it in pure JS, then
var h1 = document.createElement(h1);
h1.innerHTML="Hello World";
document.getElementbyID("root");
now this work the same way as of: 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<h1>Hello World</h1>
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
