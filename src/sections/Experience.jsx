import Skills from "../components/Skills";
import { ImHtmlFive } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="mt-32" id="skills">
      <h5 className="text-xs font-medium">My skills</h5>
      <h2 className="font-semibold text-xl mb-12">My Superpowers</h2>
      <div className="w-[90%] mx-auto my-0  ">
        <div className="flex flex-col rounded-4xl py-8 px-4 md:p-8 border border-transparent  transition-all">
          {/* <h3 className="text-primary text-left mb-8 font-semibold md:text-2xl">
            Frontend development
          </h3> */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-5">
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
              title={"React/Redux"}
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
            <Skills
              Icon={FaPython}
              title={"Python"}
              level={"Beginner"}
              iconClassName="text-2xl text-yellow-500"
            />
            <Skills
              Icon={FaGithub}
              title={"GitHub"}
              level={"Intermediate"}
              iconClassName="text-2xl text-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
