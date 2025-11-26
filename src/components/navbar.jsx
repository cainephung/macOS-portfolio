import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import {navIcons, navLinks} from "#constants/index.js";
import {useWindowStore} from "#store/window.js";

export const Navbar = () => {
    const [time, setTime] = useState(dayjs());
    const [isDark, setIsDark] = useState(false);
    const {openWindow} = useWindowStore();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const root = document.documentElement; // <html>
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    const handleIconClick = (action) => {
        if (action === "toggle-theme") {
            setIsDark((prev) => !prev);
            console.log("dark?", !isDark);

        }
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo"/>
                <p className="font-bold">Caine's Portfolio</p>
                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img, action}) => (
                        <li key={id} onClick={() => handleIconClick(action)}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`}/>
                        </li>
                    ))}
                </ul>

                <time>{time.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};
