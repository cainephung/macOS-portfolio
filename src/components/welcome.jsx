import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};
const setupTextHover = (container, type) => {
  if (!container) {
    return;
  }
  const letters = container.querySelectorAll("span");
  const { min, max, default: _base } = FONT_WEIGHT[type];

  const animateLetters = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };
  const handleMouseMove = (event) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = event.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2 / 20000));
      animateLetters(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetters(letter, _base, 0.3);
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};
const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === "" ? "\u00A0" : char}
    </span>
  ));
};
export const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");

    return () => {
      subtitleCleanup();
      titleCleanup();
    };
  }, []);
  return (
    <section id="welcome">
      <p ref={subtitleRef} className="mt-7 text-center">
        {renderText(
          "Hey there, I'm Caine. Welcome to my",
          "text-xl sm:text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="text-center">
        {renderText(
          "portfolio",
          "text-5xl sm:text-7xl lg:text-9xl italic font-georama"
        )}
      </h1>
    </section>
  );
};
