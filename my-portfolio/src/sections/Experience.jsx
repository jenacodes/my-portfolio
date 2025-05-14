import Skills from "../components/Skills";
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Experience = () => {
  return (
    <section className="mt-32">
      <h5 className="text-xs font-medium">What skills i have</h5>
      <h2 className="font-semibold text-xl mb-12">My Experience</h2>
      <div className="w-[90%] mx-auto my-0 lg:flex items-center justify-center ">
        <div className="flex flex-col bg-bg-variant rounded-4xl py-8 px-4 md:p-8 border border-transparent hover:border-primary hover:bg-background-color transition-all">
          <h3 className="text-primary text-center mb-8 font-semibold md:text-2xl">
            Frontend development
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <Skills
              Icon={ImHtmlFive}
              title={"HTML5/CSS"}
              level={"Expert"}
              iconClassName="text-2xl text-orange-500"
            />
            <Skills
              Icon={RiTailwindCssFill}
              title={"Tailwind"}
              level={"Intermediate"}
              iconClassName="text-2xl text-blue-400"
            />
            <Skills
              Icon={SiJavascript}
              title={"JavaScript"}
              level={"Intermediate"}
              iconClassName="text-2xl text-yellow-300"
            />
            <Skills
              Icon={FaReact}
              iconClassName="text-2xl text-cyan-500"
              title={"React"}
              level={"Intermediate"}
            />
            <Skills
              Icon={RiNextjsFill}
              title={"Next.js"}
              level={"Armature"}
              iconClassName="text-3xl text-black"
            />
            <Skills
              Icon={FaSass}
              title={"Sass"}
              level={"Beginner"}
              iconClassName="text-3xl text-pink-500"
            />
            <Skills
              Icon={SiTypescript}
              title={"TypeScript"}
              level={"Beginner"}
              iconClassName="text-2xl text-blue-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
