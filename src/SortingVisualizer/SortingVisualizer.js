import React, { Component } from "react";
import HeaderFooter from "../HeaderFooter/HeaderFooter";
import * as SortingAlgorithms from "../SortingAlgorithms/SortingAlgorithms";
import * as SortingAnimations from "../SortingAnimations/SortingAnimations";
import "./SortingVisualizer.css";

const COLOR_DEFAULT = "#e87e04"; // ZUTA
const COLOR_FINISH = "#27ae60"; // ZELENA
const COLOR_SORTED = "#2980b9"; // PLAVA
const COLOR_ACTIVE_ONE = "#F22613"; // CRVENA
const COLOR_ACTIVE_TWO = "#9A12B3"; // LJUBICASTA

export default class SortingVisualizer extends Component {
  state = {
    array: [100, 200, 300, 400, 600, 500],
    max: 5,
    speed: 1000
  };

  componentDidMount() {
    this.resetArray();
    this.setSpeed();
  }
  resetArray() {
    const { max } = this.state;
    if (max === "" || isNaN(max)) {
      alert("Length must be a number!!!");
      this.setState({ max: 5 });
      return false;
    }
    if (max < 5 || max > 200) {
      alert("Length must be a number between 5 and 300!");
      this.setState({ max: 5 });
      return false;
    }
    const array = [];
    const length = max;
    // const length = this.randomIntFromInterval(5, max);
    for (let i = 0; i < length; i++) {
      array.push(this.randomIntFromInterval(5, 950));
    }
    this.setState({ array });
    const els = document.getElementsByClassName("arr-el");
    for (let i = 0; i < els.length; i++) {
      els[i].style.backgroundColor = COLOR_DEFAULT;
    }
  }
  setSpeed() {
    const radios = document.getElementsByName("speed");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        this.setState({ speed: radios[i].defaultValue });
      }
    }
  }
  resetAll() {
    this.resetArray();
    this.setSpeed();
  }

  bubbleSort() {
    const { speed } = this.state;
    this.disableButtons();
    const animations = SortingAlgorithms.bubbleSort(this.state.array);
    SortingAnimations.animate(
      animations,
      speed,
      "bubble",
      COLOR_DEFAULT,
      COLOR_FINISH,
      COLOR_SORTED,
      COLOR_ACTIVE_ONE,
      COLOR_ACTIVE_TWO,
      this.enableButtons
    );
  }
  selectionSort() {
    const { speed } = this.state;
    this.disableButtons();
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
    const animations = SortingAlgorithms.selectionSort(this.state.array);
    SortingAnimations.animate(
      animations,
      speed,
      "selection",
      COLOR_DEFAULT,
      COLOR_FINISH,
      COLOR_SORTED,
      COLOR_ACTIVE_ONE,
      COLOR_ACTIVE_TWO,
      this.enableButtons
    );
  }
  insertionSort() {
    const { speed } = this.state;
    this.disableButtons();
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
    const animations = SortingAlgorithms.insertionSort(this.state.array);
    SortingAnimations.animate(
      animations,
      speed,
      "insertion",
      COLOR_DEFAULT,
      COLOR_FINISH,
      COLOR_SORTED,
      COLOR_ACTIVE_ONE,
      COLOR_ACTIVE_TWO,
      this.enableButtons
    );
  }
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  disableButtons() {
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
    }
  }
  enableButtons() {
    const btns = document.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].disabled = false;
    }
  }
  changeLength(value) {
    this.setState({ max: value});
  }
  render() {
    const { array, max } = this.state;
    return (
      <div>
        <HeaderFooter
          type="header"
          title="SORTING VISUALIZER"
          max={max}
          changeLength={this.changeLength.bind(this)}
          resetAll={this.resetAll.bind(this)}
          bubbleSort={this.bubbleSort.bind(this)}
          selectionSort={this.selectionSort.bind(this)}
          insertionSort={this.insertionSort.bind(this)}
        />
        <main>
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="arr-el"
                key={idx}
                id={idx}
                style={{
                  height: `${value / 2}px`,
                  width: `${1000 / array.length}px`
                }}
              ></div>
            ))}
          </div>
        </main>
        <HeaderFooter type="footer" />
      </div>
    );
  }
}
