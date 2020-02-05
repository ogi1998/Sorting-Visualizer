import React from "react";
import "./HeaderFooter.css";

const HeaderFooter = props => {
  const {type,title,max,changeLength,resetAll,bubbleSort,selectionSort,insertionSort} = props;
  let res;
  if (type === "header") {
    res = (
      <header>
        <h3>{title}</h3>
        <div className="length-container">
          <label>Length: </label>
          <input
            value={max}
            onChange={e => {
              changeLength(e.target.value);
            }}
            type="text"
            id="length-input"
          />
        </div>
        <div className="speed-container">
          <label htmlFor="speed">Speed: </label>
          <label htmlFor="speed">Slow</label>
          <input type="radio" value="1000" name="speed" id="speed1" />
          <label htmlFor="speed">Fast</label>
          <input type="radio" value="100" name="speed" id="speed1" />
          <label htmlFor="speed">Very Fast</label>
          <input
            defaultChecked
            type="radio"
            value="10"
            name="speed"
            id="speed1"
          />
        </div>
        <button className="btn" onClick={resetAll}>
          Generate New Options
        </button>
        <button className="btn" onClick={bubbleSort}>
          Bubble Sort
        </button>
        <button className="btn" onClick={selectionSort}>
          Selection Sort
        </button>
        <button className="btn" onClick={insertionSort}>
          Insertion Sort
        </button>
      </header>
    );
  } else if (type === "footer") {
    res = (
      <footer>
        <address>
          Developed and designed by Ognjen Vujasinovic. All rights reserved
          &copy;
        </address>
      </footer>
    );
  }
  return res;
};
export default HeaderFooter;
