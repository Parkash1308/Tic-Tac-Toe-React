import React, {useState} from "react";
import Square from "../square/Squares";
import "./Board.css"
export default function Board (){
    const [square, setSquare]=useState(Array(9).fill(null));// store the index
    const [isTrue  , setState]=useState(true);
    function handleClick(i){
        if(square[i]||CalculateWinner(square)){
            return;// if once square is filled then user cant overwrite and also return if game compete
        }
        if(isTrue){
            square[i]="X";
        }else{
            square[i]="O";
        }

        const  newConst=square.slice();
        setState(!isTrue);// it reset the boolean value
        setSquare(newConst);// it update  each index of square

    }// useState which store the userInteraction

    const winner =CalculateWinner(square);
    let status;
    if (winner) {
        status = 'Wisnner: ' + winner;
    } else {
        status = 'Next player: ' + (isTrue ? 'X' : 'O');// it check if who is the next player
        //if value of isTrue is "true then X will be next player" else "0"
    }


    return(
        <>
            <div className="board">
                <h1>{status}</h1>
                <div className="row-1">
                    <Square value={square[0]} clickOnSquare={()=>handleClick(0)}/>
                    <Square value ={square[1]} clickOnSquare={()=>handleClick(1)}/>
                    <Square value ={square[2]} clickOnSquare={()=>handleClick(2)}/>
                </div>
                <div className="row-2">
                    <Square value ={square[3]} clickOnSquare={()=>handleClick(3)}/>
                    <Square value ={square[4]} clickOnSquare={()=>handleClick(4)}/>
                    <Square value ={square[5]} clickOnSquare={()=>handleClick(5)}/>
                </div>
                <div className="row-3">
                    <Square value ={square[6]} clickOnSquare={()=>handleClick(6)}/>
                    <Square value ={square[7]} clickOnSquare={()=>handleClick(7)}/>
                    <Square value ={square[8]} clickOnSquare={()=>handleClick(8)}/>
                </div>
            </div>
        </>
    );

    function CalculateWinner(squares){
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0;i<lines.length;i++){
            const [a,b,c]=lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}// This function check  each nested array i.e [0,1,2] . if it found same symbol then return winner