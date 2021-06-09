import React from 'react'
import '../styles/Square.css'

export default function Square(props){
    const handleCick = async (i) => {
        if(props.checkBoard(i)) {
            if(props.isXTurn === false){
                await props.updateGame(i, "O")
            } else {
                await props.updateGame(i, "X")
            }
            props.checkForWin()
        }
    }
    return (
       <div className="square" onClick={() => handleCick(props.boxIndex)}>
           <span className="square-text">
                {props.game[props.boxIndex] === null ? "*" : props.game[props.boxIndex]}
           </span>

       </div>
    )
}