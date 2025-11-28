import { create } from "zustand/react";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants/index.js";

const DEFAULT_LOCATIONS = locations.work;

export const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATIONS,

    // NEW: navigation history
    history: [],
    forwardStack: [],

    // --- SET LOCATION + record history ---
    setActiveLocation: (location) =>
      set((state) => {
        if (!location || location === state.activeLocation) return;

        // push current into history
        state.history.push(state.activeLocation);

        // clear forward stack on new navigation
        state.forwardStack = [];

        state.activeLocation = location;
      }),

    // --- GO BACK ---
    goBack: () =>
      set((state) => {
        if (state.history.length === 0) return;

        const previous = state.history[state.history.length - 1];

        // move current to forward stack
        state.forwardStack.unshift(state.activeLocation);

        // move previous to active
        state.activeLocation = previous;

        // remove from history
        state.history.pop();
      }),

    // --- GO FORWARD ---
    goForward: () =>
      set((state) => {
        if (state.forwardStack.length === 0) return;

        const next = state.forwardStack[0];

        // push current into history
        state.history.push(state.activeLocation);

        // activate next
        state.activeLocation = next;

        // remove from forward stack
        state.forwardStack.shift();
      }),

    // --- RESET (your existing function) ---
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATIONS;
        state.history = [];
        state.forwardStack = [];
      }),
  }))
);
