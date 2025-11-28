import React from "react";
import { WindowWrapper } from "#hoc/WindowWraper.jsx";
import { socials } from "#constants/index.js";
import { WindowControls } from "#components/index.js";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/caine.jpeg"
          alt="Caine"
          className="w-20 rounded-full"
        />
        <p className=" text-gray-300 leading-relaxed">
          I’m Caine, a developer who likes building clean, straightforward
          applications and understanding how things work behind the scenes.
          <br />
          <br />
          My background is mainly in software, but I’ve been exploring cloud and
          networking to round out my skills and get a better sense of the bigger
          picture.
          <br />
          <br />I enjoy working on projects that teach me something new while
          still feeling practical or meaningful.
        </p>

        <h3>Let's Connect!</h3>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
