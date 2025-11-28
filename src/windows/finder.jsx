import React from "react";
import {WindowControls} from "#components/index.js";
import clsx from "clsx";

import {WindowWrapper} from "#hoc/WindowWraper.jsx";
import {locations} from "#constants/index.js";
import {useWindowStore} from "#store/window.js";
import {useLocationStore} from "#store/location.js";

const Finder = () => {
    const {openWindow} = useWindowStore();

    const {
        activeLocation,
        setActiveLocation,
        goBack,
        goForward,
        history,
        forwardStack,
    } = useLocationStore();

    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation.id ? "active" : "not-active"
                        )}
                    >
                        <img src={item.icon} className="w-4" alt={item.name}/>
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            {/* ================================
          WINDOW HEADER
        ================================= */}
            <div id="window-header" className="flex items-center">
                <WindowControls target="finder"/>

                {/* MOBILE-ONLY BACK / FORWARD */}
                <div className="flex gap-2 ml-3 sm:hidden">
                    <button
                        onClick={goBack}
                        disabled={history.length === 0}
                        className={clsx(
                            "px-2 py-1 rounded text-lg transition",
                            history.length === 0
                                ? "opacity-30"
                                : "opacity-80 hover:bg-gray-200 active:scale-95"
                        )}
                    >
                        ←
                    </button>

                    <button
                        onClick={goForward}
                        disabled={forwardStack.length === 0}
                        className={clsx(
                            "px-2 py-1 rounded text-lg transition",
                            forwardStack.length === 0
                                ? "opacity-30"
                                : "opacity-80 hover:bg-gray-200 active:scale-95"
                        )}
                    >
                        →
                    </button>
                </div>
            </div>

            {/* ================================
          CONTENT AREA
        ================================= */}
            <div className="bg-white flex h-full">
                {/* SIDEBAR (desktop only) */}
                <div className="sidebar sm:flex hidden flex-col">
                    {renderList("Favorite", Object.values(locations))}
                    {renderList("Work", locations.work.children)}
                </div>

                {/* MAIN CONTENT LIST */}
                <ul className="content">
                    {activeLocation?.children?.map((item) => (
                        <li key={item.id} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name}/>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
