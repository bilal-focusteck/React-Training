//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import './App.css';
import React from 'react';


function App() {
  const fullname = "Bilal Ahmad Qureshi";
  const fname = "Bilal";
  const mname = "Ahmad";
  const lname = "Qureshi";
  const ctime = new Date().toLocaleTimeString();
  const cdate = new Date().toLocaleDateString();
  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/200/300";
  const img3 = "https://picsum.photos/200/300";
  const link1 = "https://reactjs.org/";

  return (
    <div>
      <h1 className='heading'>{`My name is ${fname} ${mname} ${lname}`}</h1>,
      <h2 className='s_heading'>This is my first react test app for training</h2>,
      <div className='para'>
        <p>The sum of 2 and 3 is {2 + 3}</p>,
        <p>{`Time right now is: ${ctime}`}</p>
        <p>{`Date today is: ${cdate}`}</p>
        <p>My full name is {fullname}</p>
      </div>

      <div className='images'>
        <a href={link1} target="">
          <img src={img3} alt="Not found" />
        </a>
        <img src={img1}
          alt="Not found" />
        <img src={img2}
          alt="Not found" />
      </div>

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
