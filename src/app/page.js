'use client'
import React from 'react';
import ToDoList from './to-do-list';
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