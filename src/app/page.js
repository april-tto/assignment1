'use client'
import React from 'react';
import { ToDoList, removedTask } from './to-do-list';
import RemovedTasksList from './removed-tasks';
import Welcome from './welcomePage';

function NavBarButtons() {
    return (
        <div>
            <div>
                <Welcome/>
            </div>
            <div>
                <ToDoList/>
            </div>
            <div>
                <RemovedTasksList taskList={removedTask}/>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <NavBarButtons />
        </main>
    )

}