import React, {useState, useContext} from 'react';
import {JS_BUBBLE, JS_QUICK, JS_MERGE, JS_RADIX} from '../../Algorithms/Codes';
import {AlgorithmContext} from '../../context/Algorithm.context';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeView() {
    const {algorithm} = useContext(AlgorithmContext);

    return (
        <div>
            <SyntaxHighlighter language="javascript" style={docco}>
                {algorithm === "bubble" ? JS_BUBBLE : algorithm === "quick" ? JS_QUICK : algorithm === "radix" ? JS_RADIX : algorithm === "merge" ? JS_MERGE : ''}
            </SyntaxHighlighter>
        </div>
    )
}
