import React, {useState, useEffect} from 'react';
import {getBubbleSortAnimation} from '../../Algorithms/BubbleSort';
import {getMergeSortAnimations} from '../../Algorithms/Test';
import './Visualizer.scss';

import Navbar from '../Navbar/Navbar';
import {AlgorithmProvider} from '../../context/Algorithm.context'

import {numberToWord,
        placeCorrect, 
        colorChange, 
        swapAinmation, 
        randomIntFromInterval, 
        moveElementTo,
        changeBarColor,
        mergeColorChange,
        completedColor}
        from './Helpers';


const NUMBER_OF_ARRAY_BARS = 20;

function Visualizer() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(20, 550));
        }
        setArray(newArray);
        completedColor("turquoise")
    }


    return (
        <div className="visualize">
          <AlgorithmProvider>
            <Navbar 
              setArray={setArray} 
              mergeSort={mergeSort} 
              bubbleSort={bubbleSort} 
              array={array} 
              resetArray={resetArray}
              />
            <div className="bars">
                {array.map((value, idx) => {
                    let cls = numberToWord(value);
                    return (<div
                      className={`array-bars ${cls}`}
                      key={idx}
                      style={{
                          background: "turquoise",
                          height: `${value}px`
                      }}
                    >{value}</div>)
                })}
            </div>
          </AlgorithmProvider>
        </div>
    )
}


async function bubbleSort(array, setArray){
  let animations = getBubbleSortAnimation(array);
  // console.log(animations);

  var i=0;
  function myLoop() {                                     
    setTimeout(function() {
      if(animations[i].length === 1){
        if(animations[i][0] == "sorted"){
          completedColor('blue');
        }else{
          placeCorrect(animations[i][0]);
        }
      }
      else if(animations[i][0] > animations[i][1]){
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
  setArray(array.sort());
   
}

async function mergeSort(array, setArray){
  let animations = getMergeSortAnimations(array);
  //console.log(animations);
  //changeBarColor();
  let i = 0;
  async function myLoop() {
    setTimeout(async function() {
      if(i < (animations.length-1) && animations[i][0] === "merge"){
        mergeColorChange(animations[i][1], animations[i][2]);
      }
      else if(animations[i][0] === "completed"){
        completedColor('green');
      }else if(animations[i][0] === "compare"){
        colorChange(animations[i][1], animations[i][2]);
      }
      else{
        moveElementTo(animations[i][0], animations[i][1]);
      }
      i++;
      if(i < animations.length){
        await myLoop();
      }
    }, 800)
  }
  await myLoop();
  setArray(array.sort());
}



export default Visualizer
