import React, { useLayoutEffect, useRef } from "react";
import { useWindowStore } from "#store/window.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

export const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    // ==========================================================
    // OPEN ANIMATION
    // ==========================================================
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      el.style.pointerEvents = "auto";

      gsap.fromTo(
        el,
        { scale: 0.85, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    // ==========================================================
    // DRAGGABLE — DESKTOP ONLY
    // ==========================================================
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (typeof window !== "undefined" && window.innerWidth < 640) {
        return;
      }

      const header = el.querySelector("#window-header");
      if (!header) return;

      const draggable = Draggable.create(el, {
        type: "x,y",
        trigger: header,
        edgeResistance: 0.2,
        inertia: true,
        dragResistance: 0.2,

        onPress: () => {
          // just bring to front on desktop
          focusWindow(windowKey);
        },
      })[0];

      return () => {
        draggable.kill();
      };
    }, [focusWindow, windowKey]);

    // ==========================================================
    // SHOW / HIDE WINDOW
    // ==========================================================
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        el.style.display = "block";
        el.style.pointerEvents = "auto";
      } else {
        el.style.display = "none";
        el.style.pointerEvents = "none";
      }
    }, [isOpen]);

    // ==========================================================
    // WINDOW WRAPPER
    // ==========================================================
    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="
          absolute
          pointer-events-auto
          bg-white dark:bg-[#1e1e1e]
          rounded-xl
          shadow-2xl
          overflow-hidden
          max-w-[90vw]
          max-h-[90vh]
          w-[650px]
          h-auto
          overflow-y-auto
          will-change-transform
        "
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};
