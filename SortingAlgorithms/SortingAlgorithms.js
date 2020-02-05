export const bubbleSort = array => {
	const animations = [];
	const length = array.length;
	let obj = {};
	let shouldPush = false;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i; j++) {
			if (array[j] > array[j + 1]) {
				shouldPush = true;
				obj = {
					indices: {firstIndex: j, secondIndex: j + 1},
					values: {firstValue: array[j], secondValue: array[j + 1]},
					shouldSwap: true
				}
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
			else {
				shouldPush = true;
				obj = {
					indices: {firstIndex: j, secondIndex: j + 1},
					values: {firstValue: array[j], secondValue: array[j + 1]},
				}
			}
			if(j === length - i - 1) {
				obj.iterationFinished = true;
			}
			if (shouldPush) animations.push(obj);
		}
	}
	return animations;
};

export const selectionSort = array => {
	const animations = [];
	let obj = {};
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
		}
		obj = {
			indices: {firstIndex: min, secondIndex: i},
			values: {firstValue: array[min], secondValue: array[i]},
			shouldSwap: true,
			iterationFinished: true,
		}
        if (min !== i) {

            let tmp = array[i];
            array[i] = array[min];
			array[min] = tmp;
		}
		animations.push(obj);
	}
	return animations;
};

export const insertionSort = array => {
	const animations = [];
	let obj = {};
	for (let i = 1; i < array.length; i++) {
			while(array[i] < array[i - 1]) {
				obj = {
					indices: {firstIndex: i, secondIndex: i - 1},
					values: {firstValue: array[i], secondValue: array[i - 1]},
					shouldSwap: true,
					iterationFinished: true,
				}
				let temp = array[i];
				array[i] = array[i - 1];
				array[i - 1] = temp;
				animations.push(obj);
				i--;
			}
	}
	return animations;
};