import Skills from "../components/Skills";
import Reveal from "../Reveal";
import StaggerReveal from "../StaggerReveal";
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
      <div>
        <Reveal delay={0}>
          <h5 className="text-xs font-medium">My skills</h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-semibold text-xl mb-12">My Superpowers</h2>
        </Reveal>
      </div>
      <div className="w-[90%] mx-auto my-0  ">
        <div className="flex flex-col rounded-4xl py-8 px-4 md:p-8 border border-transparent  transition-all">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-5">
            <Skills
              Icon={ImHtmlFive}
              title="HTML5/CSS"
              level="Expert"
              iconClassName="text-2xl text-orange-500"
              delay={0.1}
            />
            <Skills
              Icon={RiTailwindCssFill}
              title="Tailwind"
              level="Intermediate"
              iconClassName="text-2xl text-blue-400"
              delay={0.2}
            />
            <Skills
              Icon={SiJavascript}
              title="JavaScript"
              level="Intermediate"
              iconClassName="text-2xl text-yellow-300"
              delay={0.3}
            />
            <Skills
              Icon={FaReact}
              title="React/Redux"
              level="Intermediate"
              iconClassName="text-2xl text-cyan-500"
              delay={0.4}
            />
            <Skills
              Icon={RiNextjsFill}
              title="Next.js"
              level="Armature"
              iconClassName="text-3xl text-black"
              delay={0.5}
            />
            <Skills
              Icon={FaSass}
              title="Sass"
              level="Beginner"
              iconClassName="text-3xl text-pink-500"
              delay={0.6}
            />
            <Skills
              Icon={SiTypescript}
              title="TypeScript"
              level="Beginner"
              iconClassName="text-2xl text-blue-600"
              delay={0.7}
            />
            <Skills
              Icon={FaPython}
              title="Python"
              level="Beginner"
              iconClassName="text-2xl text-yellow-500"
              delay={0.8}
            />
            <Skills
              Icon={FaGithub}
              title="GitHub"
              level="Intermediate"
              iconClassName="text-2xl text-gray-500"
              delay={0.9}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
