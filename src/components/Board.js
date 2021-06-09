import React from 'react'
import '../styles/Board.css'
import Square from './Square.js'

export default function Board(props){
    let indexCounter = -1;
    const makeNineSquares = props.game.map(()=> {
        indexCounter++
        return <Square boxindex={indexCounter}
        checkBoard={props.checkBoard}
        isXTurn={props.isXTurn}
        updateGame={props.updateGame}
        game={props.game}
        checkForWin={props.checkForWin}
        />
    })

    return (
        <div className="board">
            {makeNineSquares}
        </div>
    )
}