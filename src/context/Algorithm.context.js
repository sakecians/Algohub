import React, { createContext, useState} from 'react';

export const AlgorithmContext = createContext();

export function AlgorithmProvider(props){

    const [algorithm, setAlgorithm] = useState({});
    
    function updateAlgorithm(newAlgorithm){
        setAlgorithm((algorithm) => {
            return newAlgorithm;
        })
    }

    return(
        <AlgorithmContext.Provider value={{algorithm, updateAlgorithm}}>
            {props.children}
        </AlgorithmContext.Provider>
    )
}