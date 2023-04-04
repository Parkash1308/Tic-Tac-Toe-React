import React  from "react"
import "./Square.css"
export default function Square({value , clickOnSquare}) {
    return (
        <>
            <button className="square" onClick={clickOnSquare}>
                {value}</button>
        </>
    );
}