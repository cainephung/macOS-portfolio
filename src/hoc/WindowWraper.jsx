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
    // DRAGGABLE — MOBILE SAFE, HEADER ONLY
    // ==========================================================
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const header = el.querySelector("#window-header");

      const [instance] = Draggable.create(el, {
        type: "x,y",
        trigger: header, // Only drag from header (Fixes mobile taps)
        edgeResistance: 0.2,
        inertia: true,

        // 🔥 CRITICAL — REQUIRED FOR MOBILE
        allowNativeTouchScrolling: false,
        touch: true,

        minimumMovement: 6, // Distinguish taps vs drags
        dragResistance: 0.25,

        onPress: (e) => {
          // 🔥 FIX: Buttons WON'T DRAG the window
          if (e.target.closest("#window-controls")) return;
          focusWindow(windowKey);
        },
      });

      return () => instance.kill();
    }, []);

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
