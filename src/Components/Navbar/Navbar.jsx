import React, {useContext} from 'react';
import './Navbar.scss';
import {AlgorithmContext} from '../../context/Algorithm.context'

function Navbar(props) {
    const {setArray, resetArray, array, bubbleSort, mergeSort, quickSort, radixSort} = props;
    const {algorithm, updateAlgorithm} = useContext(AlgorithmContext);
    const handleSort = () => {
        if(algorithm === "bubble"){
            bubbleSort(array, setArray);
        }else if (algorithm === "merge"){
            mergeSort(array, setArray);
            // alert("Its yet to be implemented")
        } else if(algorithm === "quick"){
            quickSort(array, setArray);
            // alert("Its yet to be implemented")
        } else if (algorithm === "radix"){
            // alert("Its yet to be implemented")
            radixSort(array, setArray);
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
                    onClick={() => updateAlgorithm("radix")}
                    className={algorithm === "radix" ? 'active' : null}
                >
                    Radix Sort
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
