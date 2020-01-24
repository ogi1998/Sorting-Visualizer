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
	// In case array is already sorted (there was a bug with Insertion, others will still loop and check)
  if (animations.length === 0) {
    setTimeout(() => {
      finish(colorSorted, colorFinish);
    }, 100);
    setTimeout(() => {
      enableButtons();
    }, 2000);
  }
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      const { firstIndex, secondIndex } = animations[i].indices;
	  const { firstValue, secondValue } = animations[i].values;
	  changeColors(
		firstIndex,
		secondIndex,
		speed,
		colorDefault,
		activeOne,
		activeTwo,
		algorithm,
		animations[i].swap
	  );
      if (animations[i].swap) {
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
			// speed / 4
          }, speed);
        } else if (algorithm === "insertion") {
          setTimeout(() => {
            if (animations[i].swap) {
              document.getElementById(
                firstIndex
              ).style.backgroundColor = colorFinish;
              document.getElementById(
                secondIndex
              ).style.backgroundColor = colorFinish;
            }
          }, speed);
        } else if (algorithm === "selection") {
          setTimeout(() => {
            if (animations[i].swap) {
              document.getElementById(
                secondIndex
              ).style.backgroundColor = colorFinish;
            }
          }, speed);
        }
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

const changeColors = (
  firstIndex,
  secondIndex,
  speed,
  colorDefault,
  activeOne,
  activeTwo,
  algorithm,
   shouldSwap
) => {
  let speedMultiplier = 1;
  if (speed <= 100) {
    speedMultiplier = 10;
  } else if (speed <= 1000) {
    speedMultiplier = 100;
  }
  const els = document.getElementsByClassName("arr-el");
  if(shouldSwap) {
	if (algorithm !== "insertion") {
		setTimeout(() => {
		  els[firstIndex].style.backgroundColor = colorDefault;
		  els[secondIndex].style.backgroundColor = colorDefault;
		}, speed);
	  }
  }
  else {
	  if(algorithm === "bubble") {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = colorDefault;
		  }, speed);	  
	  }
  }

  if(!shouldSwap) {
  setTimeout(() => {
	  if(algorithm === "bubble")
		  els[firstIndex].style.backgroundColor = activeOne;
		}, speed - 5 * speedMultiplier);
	}
	else {
		setTimeout(() => {
			els[firstIndex].style.backgroundColor = activeOne;
			els[secondIndex].style.backgroundColor = activeTwo;
		}, speed - 5 * speedMultiplier);
	}
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
      }, i * 10);
    }, 1000);
    // U slucaju da su najmanji brojevi na svom mjestu i nismo prosli kroz njih moramo prvo sve obojiti zelenom, a tek onda plavom
    setTimeout(() => {
      els[i].style.backgroundColor = colorGreen;
    }, i * 10);
  }
};
