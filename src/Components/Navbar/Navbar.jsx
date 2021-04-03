import React, {useContext} from 'react';
import './Navbar.scss';
import {AlgorithmContext} from '../../context/Algorithm.context'

function Navbar(props) {
    const {resetArray, array, bubbleSort} = props;
    const {algorithm, updateAlgorithm} = useContext(AlgorithmContext);
    const handleSort = () => {
        if(algorithm === "bubble"){
            bubbleSort(array)
        }else if (algorithm === "merge"){
            alert("Its yet to be implemented")
        } else if(algorithm === "quick"){
            alert("Its yet to be implemented")
        } else if (algorithm === "heap"){
            alert("Its yet to be implemented")
        } else {
            alert("please select a choice")
        }
    }
    return (
        <div className="nav">
            <div className="nav__brand">
                <p>ALGOHUB</p>
            </div>
            <div className="nav__algo">
                <div 
                    onClick={() => updateAlgorithm("bubble")}
                    className={algorithm === "bubble" ? 'active' : null}
                >
                    Bubble Sort
                </div>
                <div 
                    onClick={() => updateAlgorithm("merge")}
                    className={algorithm === "merge" ? 'active' : null}
                >
                    Merge Sort
                </div>
                <div 
                    onClick={() => updateAlgorithm("quick")}
                    className={algorithm === "quick" ? 'active' : null}
                >
                    Quick Sort
                </div>
                <div 
                    onClick={() => updateAlgorithm("heap")}
                    className={algorithm === "heap" ? 'active' : null}
                >
                    Heap Sort
                </div>
                <div
                    onClick={() => resetArray()}  
                    className="nav__algo--arr"
                >
                    Random Array
                </div>
                <div 
                    onClick={handleSort} 
                    className="nav__algo--sort"
                >
                    Sort
                </div>
            </div>
        </div>
    )
}

export default Navbar
