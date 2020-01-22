import React, { Component } from 'react';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms';
import * as SortingAnimations from '../SortingAnimations/SortingAnimations';
import './SortingVisualizer.css';

const ANIMATION_SPEED = 10;
const COLOR_DEFAULT = '#e87e04'; // ZUTA
const COLOR_FINISH = '#27ae60'; // ZELENA
const COLOR_SORTED = '#2980b9'; // PLAVA
const COLOR_ACTIVE_ONE = "#F22613"; // CRVENA
const COLOR_ACTIVE_TWO = "#9A12B3"; // LJUBICASTA

export default class SortingVisualizer extends Component {
	state = {
		array: [100, 500, 200, 300, 600, 400],
		max: 5
	};

	componentDidMount() {
		this.resetArray();
	}
	resetArray() {

		const array = [];
		const length = this.state.max;
		// const length = this.randomIntFromInterval(5, max);
		for (let i = 0; i < length; i++) {
			array.push(this.randomIntFromInterval(5, 950));
		}
		this.setState({ array });
		const els = document.getElementsByClassName('arr-el');
		for (let i = 0; i < els.length; i++) {
			els[i].style.backgroundColor = COLOR_DEFAULT;
		}
	}
	mergeSort() {}
	bubbleSort() {
		this.disableButtons();
		const animations = SortingAlgorithms.bubbleSort(this.state.array);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'bubble', COLOR_DEFAULT, COLOR_FINISH, COLOR_SORTED, COLOR_ACTIVE_ONE, COLOR_ACTIVE_TWO, this.enableButtons);
	}
	selectionSort() {
		this.disableButtons();
		const btns = document.getElementsByClassName('btn');
		for(let i = 0; i < btns.length; i++) {
			btns[i].disabled = true;
		}
		const animations = SortingAlgorithms.selectionSort(this.state.array);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'selection', COLOR_DEFAULT, COLOR_FINISH, COLOR_SORTED, COLOR_ACTIVE_ONE, COLOR_ACTIVE_TWO, this.enableButtons);
	}
	insertionSort() {
		this.disableButtons();
		const btns = document.getElementsByClassName('btn');
		for(let i = 0; i < btns.length; i++) {
			btns[i].disabled = true;
		}
		const animations = SortingAlgorithms.insertionSort(this.state.array);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'insertion', COLOR_DEFAULT, COLOR_FINISH, COLOR_SORTED, COLOR_ACTIVE_ONE, COLOR_ACTIVE_TWO, this.enableButtons);
	}
	arraysAreEqual(arrayOne, arrayTwo) {
		if (arrayOne.length !== arrayTwo.length) return false;
		for (let i = 0; i < arrayOne.length; i++) {
			if (arrayOne[i] !== arrayTwo[i]) return false;
		}
		return true;
	}
	testSortingAlgorithms() {
		const array = [];
		const length = this.randomIntFromInterval(5, 1000);
		for (let i = 0; i < 100; i++) {
			for (let i = 0; i < length; i++) {
				array.push(this.randomIntFromInterval(5, 1000));
			}
			const mergeSortedArray = SortingAlgorithms.mergeSort(array);
			const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
			console.log(this.arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
		}
	}

	randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	disableButtons() {
		const btns = document.getElementsByClassName('btn');
		for(let i = 0; i < btns.length; i++) {
			btns[i].disabled = true;
		}
	}
	enableButtons() {
		const btns = document.getElementsByClassName('btn');
		for(let i = 0; i < btns.length; i++) {
			btns[i].disabled = false;
		}	
	}
	changeLength(value) {
			this.setState({max: value});
	}
	render() {
		const { array } = this.state;
		return (
			<div>
				<header>
					<h3>SORTING VISUALIZER</h3>
					<div className="length">
						<label>Length: </label>
						<input value={this.state.max} onChange = {(e) => {this.changeLength(e.target.value)}} type="text" id="length-input"/>
					</div>
					<button className = "btn" onClick={() => this.resetArray()}>Generate New Array</button>
					<button className = "btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
					<button className = "btn" onClick={() => this.selectionSort()}>Selection Sort</button>
					<button className = "btn" onClick={() => this.insertionSort()}>Insertion Sort</button>
					{/* <button className = "btn" onClick={() => this.testSortingAlgorithms()}>Test Sort</button> */}
				</header>
				<main>
					<div className='array-container'>
						{array.map((value, idx) => (
							<div
								className='arr-el'
								key={idx}
								id={idx}
								style={{ height: `${value / 2}px`, width: `${1000 / array.length}px` }}></div>
						))}
					</div>
				</main>
				<footer>
					<address>Developed by Ognjen Vujasinovic. All rights reserved &copy;</address>
				</footer>
			</div>
		);
	}
}
