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
					swap: true,
					color: false,
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
					swap: false,
					color: false,
				}
			}
			if(j === length - i - 1) {
				obj.color = true;
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
			swap: true,
			color: true,
		}
        if (min !== i) {

            let tmp = array[i];
            array[i] = array[min];
			array[min] = tmp;
		}
		if(i === array.length - i - 1) {
			obj.color = true;
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
					swap: true,
					color: true,
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