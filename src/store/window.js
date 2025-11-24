import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

export const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = true;
                win.isMinimized = false;
                win.isMaximized = false;
                win.zIndex = state.nextZIndex++;
                win.data = data ?? win.data;
            }),

        closeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = false;
                win.isMinimized = false;
                win.isMaximized = false;
                win.zIndex = INITIAL_Z_INDEX;
                win.data = null;
            }),

        minimizeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isMinimized = true;
                win.isMaximized = false;
            }),

        maximizeWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isMaximized = !win.isMaximized; // toggle
                win.isMinimized = false;
                win.zIndex = state.nextZIndex++;
            }),

        focusWindow: (windowKey) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.zIndex = state.nextZIndex++;
            }),
    }))
);