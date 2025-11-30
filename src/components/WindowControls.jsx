import React from "react";
import { useWindowStore } from "#store/window.js";

export const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="flex gap-2">
      {/* CLOSE BUTTON */}
      <div
        className="close"
        onClick={(e) => {
          e.stopPropagation(); // 🔥 FIX: prevents drag stealing the tap
          closeWindow(target);
        }}
        style={{ WebkitTapHighlightColor: "transparent" }}
      />

      {/* MINIMIZE */}
      <div
        className="minimize"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />

      {/* MAXIMIZE */}
      <div
        className="maximize"
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};
