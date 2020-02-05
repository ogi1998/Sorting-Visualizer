export const animate = (
	animations,
	speed,
	algorithm,
	colorDefault,
	colorFinish,
	colorSorted,
	colorActiveOne,
	colorActiveTwo,
	enableButtons
) => {
	if (animations.length === 0) {
		setTimeout(() => {
			finish(colorSorted, colorFinish);
		}, 100);
		setTimeout(() => {
			enableButtons();
		}, 2000);
	}
	for (let i = 0; i < animations.length; i++) {
		const { firstIndex, secondIndex } = animations[i].indices;
		const { firstValue, secondValue } = animations[i].values;
		setTimeout(() => {
			if (animations[i].shouldSwap) {
				swapElements(firstIndex, secondIndex, firstValue, secondValue, speed);
			}
			changeActiveColor(
				firstIndex,
				secondIndex,
				speed,
				colorDefault,
				colorActiveOne,
				colorActiveTwo,
				animations[i].shouldSwap
			);
			if (animations[i].iterationFinished) {
				changeSortedItemsColor(
					algorithm,
					animations[i].shouldSwap,
					firstIndex,
					secondIndex,
					colorFinish,
					speed
				);
			}
			if (i === animations.length - 1) {
				setTimeout(() => {
					finish(colorSorted, colorFinish);
				}, speed);
				setTimeout(() => {
					enableButtons();
				}, 2000);
			}
		}, i * speed);
	}
};
const swapElements = (firstIndex, secondIndex, firstValue, secondValue, speed) => {
	setTimeout(() => {
		document.getElementById(secondIndex).style.height = `${firstValue / 2}px`;
		document.getElementById(firstIndex).style.height = `${secondValue / 2}px`;
	}, speed);
};
const changeActiveColor = (
	firstIndex,
	secondIndex,
	speed,
	colorDefault,
	activeOne,
	activeTwo,
	shouldSwap
) => {
	const els = document.getElementsByClassName('arr-el');
	if (shouldSwap) {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = activeOne;
			els[secondIndex].style.backgroundColor = activeTwo;
		}, speed - speed / 2);
	} else {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = activeOne;
		}, speed - speed / 2);
	}

	// Vracanje na zutu boju
	if (shouldSwap) {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = colorDefault;
			els[secondIndex].style.backgroundColor = colorDefault;
		}, speed);
	} else {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = colorDefault;
		}, speed);
	}
};
const changeSortedItemsColor = (
	algorithm,
	shouldSwap,
	firstIndex,
	secondIndex,
	colorFinish,
	speed
) => {
	if (algorithm === 'bubble') {
		setTimeout(() => {
			if (shouldSwap) {
				document.getElementById(secondIndex).style.backgroundColor = colorFinish;
			} else {
				document.getElementById(firstIndex).style.backgroundColor = colorFinish;
			}
		}, speed);
	} else if (algorithm === 'insertion') {
		setTimeout(() => {
			if (shouldSwap) {
				document.getElementById(firstIndex).style.backgroundColor = colorFinish;
				document.getElementById(secondIndex).style.backgroundColor = colorFinish;
			}
		}, speed);
	} else if (algorithm === 'selection') {
		setTimeout(() => {
			if (shouldSwap) {
				document.getElementById(secondIndex).style.backgroundColor = colorFinish;
			}
		}, speed);
	}
};

const finish = (colorBlue, colorGreen) => {
	const els = document.getElementsByClassName('arr-el');
	for (let i = 0; i < els.length; i++) {
		setTimeout(() => {
			setTimeout(() => {
				els[i].style.backgroundColor = colorBlue;
			}, i * 10);
		}, 1000);
		setTimeout(() => {
			els[i].style.backgroundColor = colorGreen;
		}, i * 10);
	}
};
