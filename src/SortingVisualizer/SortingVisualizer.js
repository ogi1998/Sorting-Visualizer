import React, { Component } from 'react';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms';
import * as SortingAnimations from '../SortingAnimations/SortingAnimations';
import './SortingVisualizer.css';

const ANIMATION_SPEED = 10;
const COLOR_DEFAULT = "#16a085";
const COLOR_FINISH = "#27ae60";
const COLOR_SORTED = "#2980b9";

export default class SortingVisualizer extends Component {
	state = {
		array: [500, 300, 400, 200]
	};

	componentDidMount() {
		this.resetArray();
	}
	resetArray() {
		const array = [];
		const length = this.randomIntFromInterval(5, 200);
		for(let i = 0; i < length; i++) {
		    array.push(this.randomIntFromInterval(5, 950));
		}
		this.setState({array});
	}
	mergeSort() {
		
	}
	bubbleSort() {
		const animations = SortingAlgorithms.bubbleSort(this.state.array, this.finish);
		console.log(animations);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'bubble', COLOR_SORTED, COLOR_FINISH);
	}
	finish() {
		console.log("Done");
	}
	selectionSort() {
		const animations = SortingAlgorithms.selectionSort(this.state.array);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'selection',COLOR_SORTED, COLOR_FINISH);
	}
	insertionSort() {
		const animations = SortingAlgorithms.insertionSort(this.state.array);
		SortingAnimations.animate(animations, ANIMATION_SPEED, 'insertion', COLOR_SORTED, COLOR_FINISH);
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

	render() {
		const { array } = this.state;
		return (
			<div className='array-container'>
				{array.map((value, idx) => (
					<div className='arr-el' key={idx} id={idx} style={{ height: `${value / 2}px`, width: `${500 / array.length}px`}}></div>
				))}
				<br />
				<button onClick={() => this.resetArray()}>Generate New Array</button>
				<button onClick={() => this.mergeSort()}>Merge Sort</button>
				<button onClick={() => this.bubbleSort()}>Bubble Sort</button>
				<button onClick={() => this.selectionSort()}>Selection Sort</button>
				<button onClick={() => this.insertionSort()}>Insertion Sort</button>
				<button onClick={() => this.resetArray()}>Quick Sort</button>
				<button onClick={() => this.resetArray()}>Heap Sort</button>
				<button onClick={() => this.testSortingAlgorithms()}>Test Sort</button>
			</div>
		);
	}
}
