'use client'
import React from 'react';
import ToDoList from './to-do-list';
import Welcome from './welcomePage';
import './index.css'
//all css code comes from ./index.css file

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

// this is main page with default Home function, where I imported 2 components - ToDoList and Welcome