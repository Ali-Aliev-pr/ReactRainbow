import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Color from "./color";

const colorList = ["red", "orangered", "orange", "yellowgreen", "springgreen", "darkcyan", "blue", "blueviolet"]

ReactDOM.render(
  // <h1>Hello React!</h1>,
  // React.createElement('h1', {}, "Hello World"),
  <div>
    <h1>Rainbow</h1>
    <div className="rainbow">
      {/* <Color/>
      <Color/>
      <Color/> */}
      {colorList.map(function(el, i) {
        return <Color bg={el} num={i} />
      })}
    </div>
  </div>,
  document.querySelector("[data-type=\"root\"]")
);