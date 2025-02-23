import React, { useState } from 'react';
import RemovedTasksList from './removed-tasks';

function ToDoList() {
    const [tasks, setTask] = useState([
        { id: 1, task: "Complete daily tasks!" },
        { id: 2, task: "Do Advanced Front-end assignment" }
    ])

    const [deletedTask, setDeletedTask] = useState(0)

    const [value, setValue] = useState("");

    const addTask = () => {
        const NewTask = { id: tasks.length + 1, task: value };
        setTask([...tasks, NewTask]);
    }

    const removeTask = (id) => {
        setTask(tasks.filter((task) => task.id != id));
        setDeletedTask(deletedTask+1);
    }

    return (
        <div>
            <section>
                <h3>To Do:</h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.id}. {task.task}
                            <button onClick={() => removeTask(task.id)}>remove task</button>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={addTask}>Post Task</button>
            </section>
            <section>
                { (tasks.length === 0) && <RemovedTasksList taskList={deletedTask}/>}
            </section>
        </div>
    )
}

export default ToDoList