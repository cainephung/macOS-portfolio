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
    // DRAGGABLE — FIXED FOR MOBILE
    // ==========================================================
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const header = el.querySelector("#window-header");

      const [instance] = Draggable.create(el, {
        type: "x,y",
        trigger: header,
        edgeResistance: 0.2,
        inertia: true,

        // ★ MOBILE TAPS SAFE
        allowNativeTouchScrolling: false,
        dragClickables: true,
        touch: true,
        minimumMovement: 6,

        onPress: function (e) {
          // ★ DO NOT DRAG WHEN TAPPING BUTTONS
          if (
            e.target.closest("#window-controls") ||
            e.target.closest(".mobile-nav-btn")
          ) {
            this.endDrag(); // cancel drag so click works
            return;
          }

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
