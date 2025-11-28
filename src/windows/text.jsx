import React from "react";
import { WindowControls } from "#components/index.js";
import { useWindowStore } from "#store/window.js";
import { WindowWrapper } from "#hoc/WindowWraper.jsx";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      {/* main content */}
      <div className="p-6 h-full overflow-auto bg-white">
        <div className="max-w-xl mx-auto space-y-6">
          {/* IMAGE */}
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full object-contain rounded-lg"
            />
          )}

          {/* SUBTITLE */}
          {subtitle && (
            <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
          )}

          {/* DESCRIPTION */}
          {Array.isArray(description) && description.length > 0 && (
            <div className="space-y-4 leading-relaxed text-gray-800 text-base">
              {description.map((item, index) => (
                <p key={index} className="whitespace-pre-line">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
