import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import {navLinks} from "#constants/index.js";
import {useWindowStore} from "#store/window.js";

export const Navbar = () => {
    const {openWindow} = useWindowStore();

    const [time, setTime] = useState(dayjs());

    // Load theme from localStorage
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    // Clock updater
    useEffect(() => {
        const interval = setInterval(() => setTime(dayjs()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Apply theme to <html>
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <nav>
            <div className="max-sm:justify-start max-sm:gap-2">
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    className="cursor-pointer select-none min-w-6 min-h-6 p-1 z-50"
                    onClick={() => setIsDark(prev => !prev)}
                />

                <p className="font-bold max-sm:text-sm">Caine's Portfolio</p>

                <ul className="max-sm:hidden">
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <time>{time.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};
