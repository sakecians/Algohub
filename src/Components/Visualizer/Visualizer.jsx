import React, { useState, useEffect, useContext } from "react";
import { getBubbleSortAnimation } from "../../Algorithms/BubbleSort";
import { getMergeSortAnimations } from "../../Algorithms/Test";
import { getQuickSortAnimation } from "../../Algorithms/QuickSort";
import { getRadixSortAnimations } from "../../Algorithms/RadixSort";

import "./Visualizer.scss";

import Navbar from "../Navbar/Navbar";
import CodeView from "../CodeView/CodeView";
import CodeViewPy from '../CodeView/CodeViewPy';
import { AlgorithmContext } from "../../context/Algorithm.context";

import {
  numberToWord,
  placeCorrect,
  colorChange,
  swapAinmation,
  randomIntFromInterval,
  moveElementTo,
  mergeColorChange,
  completedColor,
  ANIMATION_SPEED,
  groupChangeColor,
  UseInputState,
} from "./Helpers";

// export const ANIMATION_SPEED = 500;

function Visualizer() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(5);
  const [speed, setSpeed] = UseInputState(500);
  const [isDisabled] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  function resetArray() {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(randomIntFromInterval(20, 550));
    }
    setArray(newArray);
    completedColor("turquoise");
  }

  const handleSizeChange = (e) => {
    let value = Number(e.target.value);
    setSize(() => value);
    resetArray();
  };

  // const handleKeyDown = (e) => {
  //   if(e.key === 'Enter') resetArray();
  // }

  const { algorithm } = useContext(AlgorithmContext);

  const handleSort = () => {
    // setIsDisabled(true);
    if (algorithm === "bubble") {
      bubbleSort(array, setArray);
    } else if (algorithm === "merge") {
      mergeSort(array, setArray);
      // alert("Its yet to be implemented")
    } else if (algorithm === "quick") {
      quickSort(array, setArray);
      // alert("Its yet to be implemented")
    } else if (algorithm === "radix") {
      // alert("Its yet to be implemented")
      radixSort(array, setArray);
    } else {
      alert("please select a choice");
    }
  };

  return (
    <div className="visualize">
      <Navbar
        setArray={setArray}
        mergeSort={mergeSort}
        bubbleSort={bubbleSort}
        quickSort={quickSort}
        radixSort={radixSort}
        array={array}
        resetArray={resetArray}
      />
      <div className="input">
        <div className="input-size">
          <h3>Enter size </h3>
          <input
            type="range"
            min="5"
            max="25"
            value={size}
            onChange={handleSizeChange}
          />
        </div>
        <div className="input-size">
          <h3>Enter speed (Beta) </h3>
          <input
            type="range"
            min="50"
            max="1000"
            value={speed}
            onChange={setSpeed}
          />
        </div>
      </div>

      <div className="visualize__algo">
        <div onClick={() => resetArray()} className="visualize__algo--arr">
          Random Array
        </div>
        <div
          onClick={handleSort}
          className={
            isDisabled ? "nav__algo--sort-disabled" : "visualize__algo--sort"
          }
        >
          Sort
        </div>
      </div>
      <div className="bars">
        {array.map((value, idx) => {
          let cls = numberToWord(value);
          return (
            <div
              className={`array-bars ${cls}`}
              key={idx}
              style={{
                background: "turquoise",
                height: `${value}px`,
              }}
            >
              {value}
            </div>
          );
        })}
      </div>

      <div className="code">
        <div>
          <b>Javascipt</b>

          <CodeView />
        </div>
        <div>
          <b>Python</b>
          <CodeViewPy />
        </div>
      </div>
    </div>
  );
}

///////////////////////////////////////////////////////////////
//BUBBLE SORT
//////////////////////////////////////////////////////////////
async function bubbleSort(array, setArray) {
  let animations = getBubbleSortAnimation(array);
  // console.log(animations)

  var i = 0;
  function myLoop() {
    setTimeout(function () {
      if (animations[i].length === 1) {
        if (animations[i][0] === "sorted") {
          completedColor("#7deb34");
        } else {
          placeCorrect(animations[i][0]);
        }
      } else if (animations[i][0] > animations[i][1]) {
        swapAinmation(animations[i][0], animations[i][1]);
      } else {
        colorChange(animations[i][0], animations[i][1]);
      }
      i++;
      if (i < animations.length) {
        myLoop();
      }
    }, ANIMATION_SPEED);
  }
  myLoop();
  setArray(array.sort());
}

///////////////////////////////////////////////////////////////
//MERGE SORT
//////////////////////////////////////////////////////////////
async function mergeSort(array, setArray) {
  let animations = getMergeSortAnimations(array);
  let i = 0;
  async function myLoop() {
    setTimeout(async function () {
      if (i < animations.length - 1 && animations[i][0] === "merge") {
        mergeColorChange(animations[i][1], animations[i][2]);
      } else if (animations[i][0] === "completed") {
        completedColor("#7deb34");
      } else if (animations[i][0] === "compare") {
        colorChange(animations[i][1], animations[i][2]);
      } else {
        moveElementTo(animations[i][0], animations[i][1]);
      }
      i++;
      if (i < animations.length) {
        await myLoop();
      }
    }, ANIMATION_SPEED);
  }
  await myLoop();
  setArray(array.sort());
}

///////////////////////////////////////////////////////////////
//QUICK SORT
//////////////////////////////////////////////////////////////
async function quickSort(array, setArray) {
  let animations = [];
  animations = getQuickSortAnimation(array);
  animations.push(["completed"]);
  let i = 0;
  async function myLoop() {
    setTimeout(async function () {
      if (animations[i].length === 1) {
        completedColor("#7deb34");
      } else if (animations[i][0] === "compare") {
        colorChange(animations[i][1], animations[i][2]);
      } else if (animations[i][0] === "placed") {
        placeCorrect(animations[i][1]);
      } else {
        swapAinmation(animations[i][0], animations[i][1]);
      }
      i++;
      if (i < animations.length) {
        await myLoop();
      }
    }, ANIMATION_SPEED);
  }
  await myLoop();
  setArray(array.sort());
}

///////////////////////////////////////////////////////////////
//RADIX SORT
//////////////////////////////////////////////////////////////
function radixSort(array, setArray) {
  const animations = getRadixSortAnimations(array);
  animations.push(["completed"]);
  // console.log(animations);
  let i = 0;
  function myLoop() {
    setTimeout(function () {
      if (animations[i].length === 1 && animations[i][0] === "completed") {
        completedColor("#7deb34");
      } else if (animations[i][0] === "digitBucket") {
        let digitBucket = animations[i][1];
        for (let j = 0; j < digitBucket.length; j++) {
          if (digitBucket[j].length !== 0) {
            //changeColor
            groupChangeColor(digitBucket[j]);
            // console.log(["group", ...digitBucket[j]])
          }
        }
      } else if (animations[i][0] === "nums") {
        // console.log(animations[i][1]);
        setArray(animations[i][1]);
      }
      i++;
      if (i < animations.length) {
        myLoop();
      }
    }, ANIMATION_SPEED + 500);
  }
  myLoop();
}

export default Visualizer;
