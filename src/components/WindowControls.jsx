import React from "react";
import {useWindowStore} from "#store/window.js";

export const WindowControls = ({target}) => {
    // const {closeWindow, minimizeWindow, maximizeWindow} = useWindowStore();
    const {closeWindow} = useWindowStore();

    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)}/>
            <div className="minimize disabled"/>
            <div className="maximize disabled"/>
        </div>
    );
};
