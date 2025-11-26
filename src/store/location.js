import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants/index.js";

const DEFAULT_LOCATIONS = locations.work;
export const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATIONS,
    setActiveLocation: (location) => set((state) => {
        if (location === undefined) return;
        state.activeLocation = location;
    }),
    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATIONS;
    })
})))
// export default useLocationStore;