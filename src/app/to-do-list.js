import React, { useState } from 'react';
import RemovedTasksList from './removed-tasks';

function ToDoList() {
//use useState to set an array of object - tasks in the application
    const [tasks, setTask] = useState([
        { id: 1, task: "Complete daily tasks!" },
    ])
//useState for counting deleted tasks
    const [deletedTask, setDeletedTask] = useState(0)
//useState hook for input field
    const [value, setValue] = useState("");
// this to-do list is dynamic - you can add tasks and delete them
    const addTask = () => {
        const NewTask = { id: tasks.length + 1, task: value };
        setTask([...tasks, NewTask]);
    }

    const removeTask = (id) => {
        setTask(tasks.filter((task) => task.id != id));
        setDeletedTask(deletedTask + 1);
    }
// conditionally display another component - Removed Task list
    return (
        <div>
            <section>
                <h3 className="heading">To Do:</h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.task}
                            <button onClick={() => removeTask(task.id)} className="taskButton">remove task</button>
                        </li>
                    ))}
                </ul>
                <div className="inputField">
                    <input
                        type="text"
                        placeholder="Enter your task"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={addTask} className="uploadButton">post task</button>
                </div>
            </section>
            <section>
                {(tasks.length === 0) && <RemovedTasksList taskList={deletedTask} />}
            </section>
        </div>
    )
}

export default ToDoList