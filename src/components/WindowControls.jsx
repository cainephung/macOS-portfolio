import React from "react";
import { useWindowStore } from "#store/window.js";

export const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close mobile-tap" onClick={() => closeWindow(target)}>
        {/* Only helps on mobile */}
        <span className="sr-only mobile-only">Close</span>
      </div>

      <div className="minimize disabled"></div>
      <div className="maximize disabled"></div>
    </div>
  );
};
