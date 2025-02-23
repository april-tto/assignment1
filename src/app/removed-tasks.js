'use client'
import React from 'react';
import PropTypes from 'prop-types';

function RemovedTasksList(props) {

    function displayTasks() {

        const removedTasks = props.taskList

        return (
            <ul>
            {removedTasks.map((task) => (
                <li key={task.id}>
                    {task.id}. {task.task}
                    <button>remove task</button>
                </li>
            ))}
        </ul>
        )
    }


    return(
        <div>
            <h3>Completed Tasks:</h3>
            <button onClick={displayTasks}>Display</button>
    </div>
    )
}

export default RemovedTasksList