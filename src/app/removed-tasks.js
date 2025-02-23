'use client'
import React from 'react';

function RemovedTasksList(props) {
    return(
        <div>
            <h3>Hooray! You completed all the tasks</h3>
            <h4>Hover over to see the number of completed tasks :</h4>
            <p> {props.taskList} </p>
    </div>
    )
}

export default RemovedTasksList