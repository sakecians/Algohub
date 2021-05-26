import React, { useContext } from "react";
import "./Navbar.scss";
import { AlgorithmContext } from "../../context/Algorithm.context";

function Navbar(props) {
  const {
    setArray,
    resetArray,
    array,
    bubbleSort,
    mergeSort,
    quickSort,
    radixSort,
    speed,
  } = props;

  const { algorithm, updateAlgorithm } = useContext(AlgorithmContext);

  return (
    <div className="nav">
      <div className="nav__brand">
        <p>ALGOHUB</p>
      </div>
      <div className="nav__algo">
        <select
          value={algorithm}
          onChange={(e) => updateAlgorithm(e.target.value)}
          className="nav__select"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="radix">Radix Sort</option>
        </select>
        <a className="quiz" href="#video">
          <b>Video</b>
        </a>
        <a className="quiz" href="#algorithm">
          <b>Algorithm</b>
        </a>
        <a className="quiz" href="#visualiser">
          <b>Visualiser</b>
        </a>
        <a className="quiz" href="#codes">
          <b>Code</b>
        </a>
        <a
          className="quiz"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfcyVmlJNaBdu0sf5S9TAuJ1qu9ai1sHZ5I7naYO53r4azMmw/viewform?usp=sf_link"
          //href="#visualiser"
        >
          <b>Quiz</b>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
