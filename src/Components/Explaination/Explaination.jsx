import React, {useContext} from "react";
import { AlgorithmContext } from "../../context/Algorithm.context";
import {merge, bubble, quick, radix} from './Text';
import "./Navbar.scss";

function Explaination(props) {
  const { algorithm } = useContext(AlgorithmContext);
  const data = algorithm === "bubble" ? bubble : algorithm === "quick" ? quick : algorithm === "merge" ? merge : radix;
  return (
    <div className="container">
      <div className="container__header">
        <h2 style={{textTransform: 'uppercase'}}>{algorithm}</h2>
      </div>
      <div className="container__cols">
        <div className="container__cols--item">
          <h4>Explanation</h4>
          <div>
            {data.explaination.exp}
          </div>
        </div>
        <div className="container__cols--item">
          <h4>Algorithm</h4>
          <div>
            <ul>
              {data.explaination.algorithm.map((algo) => (
                <li>{algo}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container__cols--item">
          <h4>Complexity</h4>
          <div>
            <div>
              <div>
                Time Complexity:
              </div>
              <div>
                <ul>
                  <li>Best case : {data.explaination.timeComplexity.bestCase}</li>
                  <li>Average case : {data.explaination.timeComplexity.avgCase}</li>
                  <li>Worst case : {data.explaination.timeComplexity.worstCase}</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                Space Complexity:
              </div>
              <div>
                <ul>
                  <li>{data.explaination.spaceComplexity}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explaination;
