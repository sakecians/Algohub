import React, {useState, useEffect} from 'react';
import {getBubbleSortAnimation} from '../../Algorithms/BubbleSort';
import './Visualizer.scss';
const NUMBER_OF_ARRAY_BARS = 10;

function Visualizer() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(5, 730));
        }
        setArray(newArray);
    }


    return (
        <div className="visualize">
            <h1>Visualizer goes here</h1>
            <div className="bars">
                {array.map((value, idx) => {
                    let cls = numberToWord(value);
                    return (<div
                      className={`array-bars ${cls}`}
                      key={idx}
                      style={{
                          background: 'turquoise',
                          height: `${value}px`
                      }}
                    >{value}</div>)
                })}
            </div>
            <button onClick={() => bubbleSort(array)}>
                Bubble sort
            </button>
        </div>
    )
}


async function bubbleSort(array){
  let animations = getBubbleSortAnimation(array);
  // swapAinmation(animations[0][0], animations[0][1]);
  // for(let i=0; i<animations.length; i++){
  //     swapAinmation(animations[i][0], animations[i][1]);
  // }
  var i=0;
  function myLoop() {                                     
    setTimeout(function() {
      if(animations[i][0] > animations[i][1]){
        swapAinmation(animations[i][0], animations[i][1]);
      }else{
        colorChange(animations[i][0], animations[i][1]);
      }                               
      i++;                                                  
      if (i < animations.length) {                          
        myLoop();                                           
      }                                                     
    }, 500)
  }
  myLoop(); 

}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

function testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getBubbleSortAnimation(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
}

function swapAinmation(one, two){
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
    }, 300);
}

function colorChange(one, two){
  let classNameA = numberToWord(one);
  let classNameB = numberToWord(two);
  const childA = document.querySelector(`.${classNameA}`);
  const childB = document.querySelector(`.${classNameB}`);

  childA.classList.add('transition');
  childB.classList.add('transition');

  setTimeout(() => {
    childA.classList.remove('transition');
    childB.classList.remove('transition');

  }, 300);
}

function numberToWord(num){
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



export default Visualizer
