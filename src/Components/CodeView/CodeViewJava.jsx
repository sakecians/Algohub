import React, {useContext} from 'react';
import {Java_BUBBLE, Java_QUICK, Java_MERGE, Java_RADIX} from '../../Algorithms/Codes';
import {AlgorithmContext} from '../../context/Algorithm.context';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeViewJava() {
    const {algorithm} = useContext(AlgorithmContext);

    return (
        <div>
            <SyntaxHighlighter language="java" style={docco}>
                {algorithm === "bubble" ? Java_BUBBLE : algorithm === "quick" ? Java_QUICK : algorithm === "radix" ? Java_RADIX : algorithm === "merge" ? Java_MERGE : ''}
            </SyntaxHighlighter>
        </div>
    )
}
