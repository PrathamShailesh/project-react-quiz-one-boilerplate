import React from 'react';


export function GamePage(){

        return(
            <>
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
                <button>Previous </button>
                <button>Next</button>
                <button>Quit</button>
            </div>
            </>
        )
    }


// export default GamePage