import React, {useState, useEffect} from 'react';
import {getBubbleSortAnimation} from '../../Algorithms/BubbleSort';
import {getMergeSortAnimations} from '../../Algorithms/Test';
import {getQuickSortAnimation} from '../../Algorithms/QuickSort';
import {getRadixSortAnimations} from '../../Algorithms/RadixSort';


import './Visualizer.scss';

import Navbar from '../Navbar/Navbar';
import CodeView from '../CodeView/CodeView';
import {AlgorithmProvider} from '../../context/Algorithm.context';

import {numberToWord,
        placeCorrect, 
        colorChange, 
        swapAinmation, 
        randomIntFromInterval, 
        moveElementTo,
        mergeColorChange,
        completedColor,
        ANIMATION_SPEED,
        groupChangeColor}
        from './Helpers';



// export const ANIMATION_SPEED = 500;

function Visualizer() {
    const [array, setArray] = useState([]);
    const [size, setSize] = useState(10);

    useEffect(() => {
        resetArray();
    }, [])

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < size; i++) {
            newArray.push(randomIntFromInterval(20, 550));
        }
        setArray(newArray);
        completedColor("turquoise")
    }

    const handleSizeChange = (e) => {
      let value = Number(e.target.value);
      setSize(() => value);
    }

    const handleKeyDown = (e) => {
      if(e.key === 'Enter') resetArray();
    }


    return (
        <div className="visualize">
          <AlgorithmProvider>
            <Navbar 
              setArray={setArray} 
              mergeSort={mergeSort} 
              bubbleSort={bubbleSort}
              quickSort={quickSort}
              radixSort={radixSort} 
              array={array} 
              resetArray={resetArray}
              />
            <div className="input-size">
              <h3>Enter size (Press enter)</h3>
              <input 
                type="number"
                value={size}
                onChange={handleSizeChange}
                onKeyDown={handleKeyDown}
              />
            </div>  
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
            {/* <div className="code">
              <CodeView/>
            </div> */}
            </AlgorithmProvider>
        </div>
    )
}

///////////////////////////////////////////////////////////////
//BUBBLE SORT
//////////////////////////////////////////////////////////////
async function bubbleSort(array, setArray){
  let animations = getBubbleSortAnimation(array);
  // console.log(animations)

  var i=0;
  function myLoop() {                                     
    setTimeout(function() {
      if(animations[i].length === 1){
        if(animations[i][0] === "sorted"){
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
    }, ANIMATION_SPEED)
  }
  myLoop();
  setArray(array.sort());
   
}

///////////////////////////////////////////////////////////////
//MERGE SORT
//////////////////////////////////////////////////////////////
async function mergeSort(array, setArray){
  let animations = getMergeSortAnimations(array);
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
    }, ANIMATION_SPEED)
  }
  await myLoop();
  setArray(array.sort());
}


///////////////////////////////////////////////////////////////
//QUICK SORT
//////////////////////////////////////////////////////////////
async function quickSort(array, setArray){
  let animations = getQuickSortAnimation(array);
  animations.push(["completed"]);
  let i = 0;
  async function myLoop() {
    setTimeout(async function() {
      if(animations[i].length === 1){
        completedColor('blue')
      }else if(animations[i][0] === "compare"){
        colorChange(animations[i][1], animations[i][2]);
      }else if(animations[i][0] === "placed"){
        placeCorrect(animations[i][1]);
      }else {
        swapAinmation(animations[i][0], animations[i][1]);
      }
      i++;
      if(i < animations.length){
        await myLoop();
      }
    }, ANIMATION_SPEED)
  }
  await myLoop();
  setArray(array.sort());
}


///////////////////////////////////////////////////////////////
//RADIX SORT
//////////////////////////////////////////////////////////////
function radixSort(array, setArray){
  const animations = getRadixSortAnimations(array);
  animations.push(["completed"])
  // console.log(animations);
  let i = 0;
  function myLoop(){
    setTimeout(function (){
      if(animations[i].length === 1 && animations[i][0] === 'completed'){
        completedColor('blue');
      }
      else if(animations[i][0] === 'digitBucket'){
        let digitBucket = animations[i][1];
        for(let j=0; j<digitBucket.length; j++){
          if(digitBucket[j].length !== 0){
            //changeColor
            groupChangeColor(digitBucket[j]);
            // console.log(["group", ...digitBucket[j]])
          }
        }
      }else if(animations[i][0] === 'nums'){
        // console.log(animations[i][1]);
        setArray(animations[i][1])
      }      
      i++;
      if(i < animations.length){
        myLoop()
      }
    }, ANIMATION_SPEED+500)
  }
  myLoop();
}



export default Visualizer
