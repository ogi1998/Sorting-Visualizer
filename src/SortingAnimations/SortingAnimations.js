export const animate = (
  animations,
  speed,
  algorithm,
  colorDefault,
  colorFinish,
  colorSorted,
  activeOne,
  activeTwo,
  enableButtons
) => {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      const { firstIndex, secondIndex } = animations[i].indices;
      const { firstValue, secondValue } = animations[i].values;
      if (animations[i].swap) {
        changeColors(firstIndex, secondIndex, speed, colorDefault, activeOne, activeTwo);
        swapElements(firstIndex, secondIndex, firstValue, secondValue, speed);
      }
      if (animations[i].color) {
        if (algorithm === "bubble") {
			setTimeout(() => {
				if (animations[i].swap) {
					document.getElementById(
					  secondIndex
					).style.backgroundColor = colorFinish;
				  } else {
					document.getElementById(
					  firstIndex
					).style.backgroundColor = colorFinish;
				  }
			}, speed + 1);
		} 
		 else if (algorithm === "insertion") {
			setTimeout(() => {
				if (animations[i].swap) {
					document.getElementById(
					  firstIndex
					).style.backgroundColor = colorFinish;
					document.getElementById(
					  secondIndex
					).style.backgroundColor = colorFinish;
				  }
			}, speed + 1);
        }
        else if (algorithm === "selection") {
			  setTimeout(() => {
				if (animations[i].swap) {
				document.getElementById(
					secondIndex
				  ).style.backgroundColor = colorFinish;
				}
			  }, speed + 1);
          }
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
		  finish(colorSorted, colorFinish);
		}, 100);
		setTimeout(() => {
			enableButtons();
		}, 2000);
      }
    }, i * speed);
  }
};

const changeColors = (firstIndex, secondIndex, speed, colorDefault, activeOne, activeTwo) => {
  let speedMultiplier = 1;
  if (speed <= 100) {
    speedMultiplier = 10;
  } else if (speed <= 1000) {
    speedMultiplier = 100;
  }
  const els = document.getElementsByClassName("arr-el");
  setTimeout(() => {
      els[firstIndex].style.backgroundColor = colorDefault;
      els[secondIndex].style.backgroundColor = colorDefault;
  }, speed);
  setTimeout(() => {
    els[firstIndex].style.backgroundColor = activeOne;
    els[secondIndex].style.backgroundColor = activeTwo;
  }, speed - 5 * speedMultiplier);
};
const swapElements = (
  firstIndex,
  secondIndex,
  firstValue,
  secondValue,
  speed
) => {
  setTimeout(() => {
    document.getElementById(secondIndex).style.height = `${firstValue / 2}px`;
    document.getElementById(firstIndex).style.height = `${secondValue / 2}px`;
  }, speed);
};

const finish = (colorBlue, colorGreen) => {
  const els = document.getElementsByClassName("arr-el");
  for (let i = 0; i < els.length; i++) {
	  setTimeout(() => {
		setTimeout(() => {
			els[i].style.backgroundColor = colorBlue;  
		  }, i * 10)
	  }, 500);
    setTimeout(() => {
      els[i].style.backgroundColor = colorGreen;
    }, i * 10);
  }
};
