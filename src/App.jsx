import React from 'react'
import {Dock, Navbar, Welcome} from "#components";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Image, Resume, Safari, Terminal, Text} from "#windows";
import Finder from "#windows/finder.jsx";

gsap.registerPlugin(Draggable);
const App = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
        </main>
    )
}
export default App
