import React from "react";
const fname = "Bilal";
const mname = "Ahmad";
const lname = "Qureshi";
const heading = {
  color: "Green",
  margin: "5px",
  padding: "5px",
  textAlign: "center"
};

//by arrow function method, no need to write return in arrow functions
const Heading = () =>
  <h1 style={heading}>{`My name is ${fname} ${mname} ${lname}`}</h1>


// function Heading() {
//   return <h1 style={heading}>{`My name is ${fname} ${mname} ${lname}`}</h1>
// }
export default Heading;