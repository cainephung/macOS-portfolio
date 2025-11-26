import React, {useEffect} from 'react';
import {Dock, Home, Navbar, Welcome} from "#components";
import {Draggable} from "gsap/Draggable";
import gsap from "gsap";
import {Contact, Image, Resume, Safari, Terminal, Text} from "#windows";
import Finder from "#windows/finder.jsx";
import {useThemeStore} from "#store/theme.js";

gsap.registerPlugin(Draggable);

const App = () => {
    const {theme} = useThemeStore();

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");

    }, [theme]);

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
            <Home/>
        </main>
    );
};

export default App;
