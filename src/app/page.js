'use client'
import React from 'react';
import ToDoList from './to-do-list';
import Welcome from './welcomePage';
import './index.css'

function NavBarButtons() {
    return (
        <div className="displayedWindow">
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