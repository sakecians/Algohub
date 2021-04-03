import React, {useState, useEffect} from 'react';
import {getBubbleSortAnimation} from '../../Algorithms/BubbleSort';
import './Visualizer.scss';

import Navbar from '../Navbar/Navbar';
import {AlgorithmProvider} from '../../context/Algorithm.context'

import {numberToWord,placeCorrect, colorChange, swapAinmation, randomIntFromInterval} from './Helpers';


const NUMBER_OF_ARRAY_BARS = 10;

function Visualizer() {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    function resetArray() {
        const newArray = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            newArray.push(randomIntFromInterval(10, 550));
        }
        setArray(newArray);
    }


    return (
        <div className="visualize">
          <AlgorithmProvider>
            <Navbar bubbleSort={bubbleSort} array={array} resetArray={resetArray}/>
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
          </AlgorithmProvider>
        </div>
    )
}


function bubbleSort(array){
  let animations = getBubbleSortAnimation(array);
  var i=0;
  function myLoop() {                                     
    setTimeout(function() {
      if(animations[i].length === 1){
        placeCorrect(animations[i][0]);
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
    }, 800)
  }
  myLoop(); 

}















export default Visualizer
