import React, {useState} from 'react';

let removedTask = [];

function ToDoList() {
    const [tasks, setTask] = useState([
        {id: 1, task: "Complete daily tasks!"},
        {id: 2, task: "Do Advanced Front-end assignment"}
    ])

    const [value, setValue] = useState("");

    const addTask = () => {
        const NewTask = {id: tasks.length + 1, task: value}
        setTask([...tasks, NewTask]);
    }

    const removeTask = (id) => {
        setTask(tasks.filter((task) => task.id != id))
        removedTask.push(tasks[id-1]);
    }

    return(
        <div>
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
        </div>
    )
}

export {
    ToDoList, 
    removedTask
}