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

    // ===== OPEN ANIMATION =====
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      el.style.pointerEvents = "auto";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    // ===== DRAGGABLE (mobile-safe) =====
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      // drag ONLY the header
      const header = el.querySelector("#window-header");

      const [instance] = Draggable.create(el, {
        type: "x,y",
        trigger: header,
        edgeResistance: 0.15,
        inertia: true,
        allowNativeTouchScrolling: false, // important for iOS
        touch: true, // allow touch dragging
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    // ===== SHOW/HIDE =====
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
      el.style.pointerEvents = isOpen ? "auto" : "none";
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
          rounded-xl shadow-2xl
          max-w-[90vw] max-h-[90vh]
          w-[650px] h-auto
          overflow-y-auto
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
