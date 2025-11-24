import React, {useLayoutEffect, useRef} from 'react'
import {useWindowStore} from "#store/window.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

export const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const win = windows[windowKey];   // <-- get full state
        const {isOpen, isMinimized, isMaximized, zIndex} = win;

        const ref = useRef(null);

        /** -------------------------------
         *  OPEN ANIMATION
         ---------------------------------*/
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;
            el.style.display = "block";

            // Animate only when opening, not when restoring from minimize
            if (!isMinimized) {
                gsap.fromTo(
                    el,
                    {scale: 0.8, opacity: 0, y: 40},
                    {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                    }
                );
            }
        }, [isOpen]);

        /** -------------------------------
         *  DRAGGABLE (DISABLED WHEN MAXIMIZED)
         ---------------------------------*/
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
                disabled: isMaximized,   // <-- disable dragging when maximized
            });

            return () => instance.kill();
        }, [isMaximized]);

        /** -------------------------------
         *  DISPLAY TOGGLE (OPEN / MINIMIZED)
         ---------------------------------*/
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            if (!isOpen || isMinimized) {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        }, [isOpen, isMinimized]);

        /** -------------------------------
         *  MAXIMIZED STYLE OVERRIDE
         ---------------------------------*/
        const style = {
            zIndex,
            position: "absolute",
            ...(isMaximized && {
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
            }),
        };

        return (
            <section id={windowKey} ref={ref} style={style}>
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
};
