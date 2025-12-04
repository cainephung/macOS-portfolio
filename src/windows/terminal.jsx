import React from "react";
import { WindowWrapper } from "#hoc/WindowWraper.jsx";
import { techStack } from "#constants/index.js";
import { Check, Flag } from "lucide-react";
import { WindowControls } from "#components/index.js";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack px-3 sm:px-6 py-4">
        <p>
          <span className="font-bold">@Caine % </span>
          show tech stack
        </p>

        {/* DESKTOP-ONLY HEADER LABELS */}
        <div className="label hidden sm:flex mt-3 mb-1">
          <p className="w-40 font-medium">Categories</p>
          <p className="font-medium">Technologies</p>
        </div>

        {/* TECH STACK LIST */}
        <ul className="content space-y-3 mt-2">
          {techStack.map(({ category, items }) => (
            <li
              key={category}
              className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3 py-1"
            >
              {/* FIRST LINE: Check + Category (always inline) */}
              <div className="flex items-center gap-2">
                <Check className="check flex-shrink-0" size={20} />
                <h3 className="font-semibold">{category}</h3>
              </div>

              {/* SECOND LINE on mobile, inline on desktop */}
              <ul className="flex flex-wrap gap-x-1 text-sm opacity-90 sm:ml-2 sm:flex-1">
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* FOOTER */}
        <div className="footnote mt-4 space-y-1 text-sm">
          <p className="flex items-center gap-1">
            <Check size={20} /> Loaded 7 of 7 successfully (100%)
          </p>

          <p className="text-black flex items-center gap-1">
            <Flag size={15} fill="black" />
            Render time: 7ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
