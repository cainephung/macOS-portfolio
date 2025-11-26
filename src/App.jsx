import React from 'react'
import {Dock, Navbar, Welcome} from "#components";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Contact, Image, Resume, Safari, Terminal, Text} from "#windows";
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
            <Contact/>
        </main>
    )
}
export default App
