import {getQuickSortAnimation} from '../../Algorithms/QuickSort';

export const ANIMATION_SPEED = 800;

const SPEED = ANIMATION_SPEED-200;

export function numberToWord(num){
    let parsed = num.toString().split('');
    let result = [];
    for(let i=0; i<parsed.length; i++){
        if(parsed[i] === "0") result.push("zero")
        else if(parsed[i] === "1") result.push("one")
        else if(parsed[i] === "2") result.push("two")
        else if(parsed[i] === "3") result.push("three")
        else if(parsed[i] === "4") result.push("four")
        else if(parsed[i] === "5") result.push("five")
        else if(parsed[i] === "6") result.push("six")
        else if(parsed[i] === "7") result.push("seven")
        else if(parsed[i] === "8") result.push("eight")
        else if(parsed[i] === "9") result.push("nine")
    }
    return result.join('');
}

export function colorChange(one, two){
  let classNameA = numberToWord(one);
  let classNameB = numberToWord(two);
  const childA = document.querySelector(`.${classNameA}`);
  const childB = document.querySelector(`.${classNameB}`);

  childA.classList.add('compare');
  childB.classList.add('compare');

  setTimeout(() => {
    childA.classList.remove('compare');
    childB.classList.remove('compare');
    childA.style.background = 'turquoise';
    childB.style.background = 'turquoise';
  }, SPEED);
}

export function colorChangeSingle(one){
  let classNameA = numberToWord(one);
  const childA = document.querySelector(`.${classNameA}`);

  childA.classList.add('compare');

  setTimeout(() => {
    childA.classList.remove('compare');
  }, SPEED);
}

export function placeCorrect(one){
  let className = numberToWord(one);
  const child = document.querySelector(`.${className}`);

  child.classList.add("placed");
}

export function swapAinmation(one, two){
    let classNameA = numberToWord(one);
    let classNameB = numberToWord(two);
    const childA = document.querySelector(`.${classNameA}`);
    const childB = document.querySelector(`.${classNameB}`);
    const finalChildAStyle = {
        x: null,
        y: null,
    };
    const finalChildBStyle = {
        x: null,
        y: null,
    };
    
    childA.classList.add('transition');
    childB.classList.add('transition');
    finalChildAStyle.x = childB.getBoundingClientRect().left - childA.getBoundingClientRect().left;
    finalChildAStyle.y = childA.getBoundingClientRect().top - childB.getBoundingClientRect().top;
    finalChildBStyle.x = childA.getBoundingClientRect().left - childB.getBoundingClientRect().left;
    finalChildBStyle.y = childB.getBoundingClientRect().top - childA.getBoundingClientRect().top;
    childA.style.transform = `translate(${finalChildAStyle.x}px, ${finalChildAStyle.y}px)`;
    childB.style.transform = `translate(${finalChildBStyle.x}px, ${finalChildBStyle.y}px)`;

    setTimeout(() => {
    //   document.querySelector('.container').insertBefore(childB, childA);
      childA.classList.remove('transition');
      childB.classList.remove('transition');

      childA.classList.remove(classNameA);
      childB.classList.remove(classNameB);

      childA.removeAttribute('style');
      childB.removeAttribute('style');
      
      childA.style.height = `${two}px`;
      childB.style.height = `${one}px`;

      childA.classList.add(classNameB);
      childB.classList.add(classNameA)

      childA.style.background = 'turquoise';
      childB.style.background = 'turquoise';

      childA.textContent = two;
      childB.textContent = one;
    }, SPEED);
}

export function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const quickSortedArray = getQuickSortAnimation(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
    }
}

export function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
export function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function moveElementTo(idx, value){
  let classNameB = numberToWord(value);
  const childA = document.querySelectorAll(".array-bars")[idx];
  const childB = document.querySelector(`.${classNameB}`);
  let heightA = childA.style.height;
  let heightB = childB.style.height;
  let classNameA = childA.classList.value.split(' ')[1];
  let textA = childA.textContent;
  let textB = childB.textContent;


  const finalChildAStyle = {
      x: null,
      y: null,
  };
  const finalChildBStyle = {
      x: null,
      y: null,
  };
    childA.classList.add('transition');
    childB.classList.add('transition');
  finalChildAStyle.x = childB.getBoundingClientRect().left - childA.getBoundingClientRect().left;
  finalChildAStyle.y = childA.getBoundingClientRect().top - childB.getBoundingClientRect().top;
  finalChildBStyle.x = childA.getBoundingClientRect().left - childB.getBoundingClientRect().left;
  finalChildBStyle.y = childB.getBoundingClientRect().top - childA.getBoundingClientRect().top;
  childA.style.transform = `translate(${finalChildAStyle.x}px, ${finalChildAStyle.y}px)`;
  childB.style.transform = `translate(${finalChildBStyle.x}px, ${finalChildBStyle.y}px)`;

  setTimeout(() => {
  //   document.querySelector('.container').insertBefore(childB, childA);
    childA.classList.remove('transition');
    childB.classList.remove('transition');

    childA.classList.remove(classNameA);
    childB.classList.remove(classNameB);

    childA.removeAttribute('style');
    childB.removeAttribute('style');
    
    childA.style.height = heightB;
    childB.style.height = heightA;

    childA.classList.add(classNameB);
    childB.classList.add(classNameA)

    childA.style.background = 'turquoise';
    childB.style.background = 'turquoise';

    childA.textContent = textB;
    childB.textContent = textA;
  }, SPEED);
}

export function mergeColorChange(arr1, arr2){
  for(let i=0; i < arr1.length; i++){
    let className = numberToWord(arr1[i]);
    let child = document.querySelector(`.${className}`);
    child.style.background = '#da00f7';
    setTimeout(function() {
      child.style.background = 'turquoise';
    }, SPEED)
  }
  for(let i=0; i < arr2.length; i++){
    let className = numberToWord(arr2[i]);
    let child = document.querySelector(`.${className}`);
    child.style.background = "#750485";
    setTimeout(function() {
      child.style.background = 'turquoise';
    }, SPEED)
  }
}



function generateRandomColors(num){

  var a = [];

  for(var i=0; i<num; i++){
      a.push(randomColor());
  }

  return a;

}

function randomColor(){

  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}

export function changeBarColor(){
  let bars = document.querySelectorAll(".array-bars");
  let colors = generateRandomColors(bars.length);
  for(let i=0; i<bars.length; i++){
    bars[i].style.background = colors[i];
  }
}

export function completedColor(color){
  let bars = document.querySelectorAll(".array-bars");
  for(let i=0; i<bars.length; i++){
    bars[i].style.background = color;
  }
}

export function groupChangeColor(arr){
  let bars = [];
  let color = randomColor();
  for(let i=0; i<arr.length; i++){
    let className = numberToWord(arr[i]);
    let bar = document.querySelector(`.${className}`);
    bars.push(bar);
  }
  // console.log(bars);
  for(let i=0; i<bars.length; i++){
    bars[i].style.background = color;
  } 
}
