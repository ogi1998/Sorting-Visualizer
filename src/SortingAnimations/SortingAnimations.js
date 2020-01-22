export const animate = (
  animations,
  speed,
  algorithm,
  colorBlue,
  colorGreen
) => {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      const { firstIndex, secondIndex } = animations[i].indices;
      const { firstValue, secondValue } = animations[i].values;
      if (animations[i].swap) {
        changeColors(firstIndex, secondIndex, speed);
        swapElements(firstIndex, secondIndex, firstValue, secondValue, speed);
      }
      if (animations[i].color) {
        if (algorithm === "bubble") {
			setTimeout(() => {
				if (animations[i].swap) {
					document.getElementById(
					  secondIndex
					).style.backgroundColor = colorGreen;
				  } else {
					document.getElementById(
					  firstIndex
					).style.backgroundColor = colorGreen;
				  }
			}, speed + 1);
		} 
		 else if (algorithm === "insertion") {
			setTimeout(() => {
				if (animations[i].swap) {
					document.getElementById(
					  firstIndex
					).style.backgroundColor = colorGreen;
					document.getElementById(
					  secondIndex
					).style.backgroundColor = colorGreen;
				  }
			}, speed + 1);
        }
        else if (algorithm === "selection") {
			  setTimeout(() => {
				if (animations[i].swap) {
				document.getElementById(
					secondIndex
				  ).style.backgroundColor = colorGreen;
				}
			  }, speed + 1);
          }
      }
      if (i === animations.length - 1) {
        setTimeout(() => {
          finish(colorBlue, colorGreen);
        }, 1000);
      }
    }, i * speed);
  }
};

const changeColors = (firstIndex, secondIndex, speed) => {
  let speedMultiplier = 1;
  if (speed <= 100) {
    speedMultiplier = 10;
  } else if (speed <= 1000) {
    speedMultiplier = 100;
  }
  const els = document.getElementsByClassName("arr-el");
  setTimeout(() => {
      els[firstIndex].style.backgroundColor = "#16a085";
      els[secondIndex].style.backgroundColor = "#16a085";
  }, speed);
  setTimeout(() => {
    els[firstIndex].style.backgroundColor = "red";
    els[secondIndex].style.backgroundColor = "green";
    console.log("red");
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
	  }, 100);
    setTimeout(() => {
      els[i].style.backgroundColor = colorGreen;
    }, i * 10);
  }
};
