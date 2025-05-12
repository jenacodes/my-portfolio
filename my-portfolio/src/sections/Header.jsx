/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import BlueButton from "../components/BlueButton";
import SecondButton from "../components/SecondButton";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";

const socials = [
  { name: "LinkedIn", Icon: FaLinkedin, url: "https://linkedin.com/…" },
  { name: "GitHub", Icon: FaGithub, url: "https://github.com/…" },
  { name: "X", Icon: FaXTwitter, url: "https://x.com/…" },
  { name: "line", Icon: PiLineVertical },
];

const Header = () => {
  return (
    <header className="h-screen pt-28 overflow-hidden">
      <div className="w-[75%] my-0 mx-auto text-center relative h-[100%]">
        <h5 className="font-medium">Hello, I’m</h5>
        <h1 className="text-4xl my-2.5 font-medium">Jenakumo Emmanuel</h1>
        <h5 className="text-gray-400 text-xs my-5">Full‑Stack Developer</h5>

        <div className="flex justify-center gap-4 mt-10">
          <BlueButton text={"Download CV"} />
          <SecondButton text={"Let's Talk"} />
        </div>

        <div className="absolute bottom-12 left-0 mt-10 gap-3 hidden md:flex flex-col">
          <IconContext.Provider
            value={{
              className: "text-blue-500 hover:text-blue-700",
            }}
          >
            {socials.map(({ name, Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Suspense
                  fallback={
                    <span className=" block w-6 h-6 bg-gray-200 animate-pulse" />
                  }
                >
                  <Icon />
                </Suspense>
              </a>
            ))}
          </IconContext.Provider>
        </div>
        <div className="h-[30rem] mt-16  absolute w-[18rem]  left-[calc(50%-9rem)]">
          <img
            src="ChatGPT Image May 4, 2025, 09_30_47 AM.png"
            alt=""
            className="h-[100%] object-cover w-[100%] [border-radius:12rem_12rem_0_0] "
          />
        </div>
        <a
          href=""
          className="hidden md:block bottom-20 absolute text-sm text-primary  right-[-2.3rem] transform rotate-90 hover:text-white transition-all"
        >
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
