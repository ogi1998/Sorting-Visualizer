export const animate = (animations, speed, algorithm, colorBlue, colorGreen) => {
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      const { firstIndex, secondIndex } = animations[i].indices;
      const { firstValue, secondValue } = animations[i].values;
      if (animations[i].swap) {
        // changeColors(firstIndex, secondIndex);
        swapElements(firstIndex, secondIndex, firstValue, secondValue);
      }
      if (animations[i].color) {
        if (algorithm === "bubble") {
          if (animations[i].swap) {
            document.getElementById(
              secondIndex
            ).style.backgroundColor = colorGreen;
          } else {
            document.getElementById(
              firstIndex
            ).style.backgroundColor = colorGreen;
          }
        } else if (algorithm === "insertion") {
          if (animations[i].swap) {
            document.getElementById(
              firstIndex
            ).style.backgroundColor = colorGreen;
            document.getElementById(
              secondIndex
            ).style.backgroundColor = colorGreen;
          }
        } else if (algorithm === "selection") {
          if (animations[i].swap) {
            document.getElementById(
              secondIndex
            ).style.backgroundColor = colorGreen;
          }
        }
      }
      if (i === animations.length - 1) finish(colorBlue);
    }, i * speed);
  }
};

const changeColors = (firstIndex, secondIndex) => {
	const els = document.getElementsByClassName('arr-el');
  setTimeout(() => {
    document.getElementById(secondIndex).style.backgroundColor = `red`;
    document.getElementById(firstIndex).style.backgroundColor = `purple`;
  }, 50);
  setTimeout(() => {
    document.getElementById(secondIndex).style.backgroundColor = `purple`;
    document.getElementById(firstIndex).style.backgroundColor = `red`;
  }, 60);
  setTimeout(() => {
	  for(let i = 0; i < els.length - i; i++) {
		  if(i === firstIndex || i === secondIndex) continue;
		document.getElementById(i).style.backgroundColor = `turquoise`;
	  }

  }, 70);
};
const swapElements = (firstIndex, secondIndex, firstValue, secondValue) => {
  document.getElementById(secondIndex).style.height = `${firstValue / 2}px`;
  document.getElementById(firstIndex).style.height = `${secondValue / 2}px`;
};

const finish = colorBlue => {
  const els = document.getElementsByClassName("arr-el");
  for (let i = 0; i < els.length; i++) {
    setTimeout(() => {
	  els[i].style.backgroundColor = colorBlue;
    }, i * 10);
  }
};
