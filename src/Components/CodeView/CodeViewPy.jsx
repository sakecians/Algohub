import React, {useContext} from 'react';
import {PY_BUBBLE, PY_QUICK, PY_MERGE, PY_RADIX} from '../../Algorithms/Codes';
import {AlgorithmContext} from '../../context/Algorithm.context';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeView() {
    const {algorithm} = useContext(AlgorithmContext);

    return (
        <div>
            <SyntaxHighlighter language="python" style={docco}>
                {algorithm === "bubble" ? PY_BUBBLE : algorithm === "quick" ? PY_QUICK : algorithm === "radix" ? PY_RADIX : algorithm === "merge" ? PY_MERGE : ''}
            </SyntaxHighlighter>
        </div>
    )
}
