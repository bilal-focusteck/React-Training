import React from "react";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/200/300";
const img3 = "https://picsum.photos/200/300";
const link1 = "https://reactjs.org/";

const styling = {
  color: "Blue",
  margin: "30px",
  padding: "5px",
  textAlign: "center"
};

function Images() {
  return (
    <React.Fragment>
      <div style={styling}>
        <a href={link1} target="">
          <img src={img3} alt="Not found" />
        </a>

        <img src={img1}
          alt="Not found" />

        <img src={img2}
          alt="Not found" />
      </div>

    </React.Fragment>
  )
}

export default Images;
export { styling };