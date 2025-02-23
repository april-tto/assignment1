'use client'
import React, {useState} from 'react';

function RemovedTasksList(props) {

    const [color, setColor] = useState("rgb(0, 40, 0)");

   const handleOver = () => {
    setColor("azure")
   }

   const handleOut = () => {
    setColor("rgb(0, 40, 0)")
   }
    return(
        <div className="result">
            <h3>Hooray! You completed all the tasks</h3>
            <h4>Hover over to see the number of completed tasks :</h4>
            <p className="hoverBox" onMouseOver={handleOver} onMouseLeave={handleOut} style={{color: color}}> {props.taskList} </p>
        </div>
    )
}

export default RemovedTasksList