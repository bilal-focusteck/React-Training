//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import './App.css';
import React from 'react';
import Heading from './Heading';
import Images from './Images';
import { styling } from './Images';


function App() {
  const fullname = "Bilal Ahmad Qureshi";
  const ctime = new Date().toLocaleTimeString();
  const cdate = new Date().toLocaleDateString();
  //to add inline css in react, make object and add obj name in JSX 


  return (
    <div>
      {/* in H1 case, i created a component and just called it */}
      ,<Heading />,
      <h2 className='s_heading'>This is my first react test app for training</h2>,
      <div style={styling}>
        <p>The sum of 2 and 3 is {2 + 3}</p>
        <p>{`Time right now is: ${ctime}`}</p>
        <p>{`Date today is: ${cdate}`}</p>
        <p>hey, My name is {fullname}</p>
      </div>

      <Images />

      <h3 className='third_heading'>Here are some of my favourite motorbikes in Pakistan</h3>
      <ol className='list'>
        <div className='sublist'>
          <li>Kawasaki Ninja ZX10R</li>
          <li>Kawasaki Ninja H2R</li>
          <li>Ducatti Panegale v4</li>
        </div>

      </ol>
    </div>
  )

}
export default App;
