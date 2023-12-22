import React from 'react';



export function GamePage(){

        return(
            <div className="second">
            <h1>Question</h1>
            <p>1 of 15</p>
            <h3>Which is the only mammal that can jump?</h3>
            <div className='questions'>
            <div><h4>Dog</h4></div>
            <div><h4>Elephant</h4></div>
            <div><h4>Goat</h4></div>
            <div><h4>Lion</h4></div>
            </div>
            <div className="buttons">
                <button className='previous'>Previous </button>
                <button className='next'>Next</button>
                <button className='quit'>Quit</button>
            </div>
            </div>
        )
    }


// export default GamePage