import React from 'react';
import './Navbar.scss'

function Navbar() {
    return (
        <div className="nav">
            <div className="nav__brand">
                <p>ALGOHUB</p>
            </div>
            <div className="nav__algo">
                <div>Bubble Sort</div>
                <div>Merge Sort</div>
                <div>Quick Sort</div>
                <div>Heap Sort</div>
                <div>Random Array</div>
            </div>
        </div>
    )
}

export default Navbar
