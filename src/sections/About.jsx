import { SlBadge } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import InfoCard from "../components/InfoCard";
import Reveal from "../Reveal";
import StaggerReveal from "../StaggerReveal";
import { motion as Motion } from "framer-motion";

import SecondButton from "../components/SecondButton";

const About = () => {
  return (
    <section className="mt-32 " id="about">
      <div>
        <Reveal delay={0}>
          <h5 className="text-xs font-medium">Get To Know Me</h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-semibold text-xl mb-12">About Me</h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] my-0 mx-auto lg:w-[86%]">
        <Reveal delay={0.2} y={60}>
          <Motion.div
            initial={{ rotate: 10, opacity: 0, y: 60 }}
            whileInView={{ rotate: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[65%] md:w-[50%] mb-12 mx-auto mt-0 lg:my-8 grid place-items-center h-80 bg-[linear-gradient(45deg,_transparent,_var(--color-primary),_transparent)] rounded-4xl aspect-square"
          >
            <div className="h-[100%] rounded-4xl overflow-hidden">
              <img
                src="\images\20250327_151044_1.jpg"
                className="h-[100%] object-cover w-[100%] rounded-4xl block"
                alt="About me"
              />
            </div>
          </Motion.div>
        </Reveal>
        <div className="text-center lg:text-left">
          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
              <InfoCard
                Icon={SlBadge}
                title={"Experience"}
                description={"2+ Year Working Experience"}
              />
              <InfoCard
                Icon={LuUsers}
                title={"Clients"}
                description={"10+ Clients Worldwide"}
              />
              <InfoCard
                Icon={GoProjectSymlink}
                title={"Projects"}
                description={"20+ Completed Projects"}
              />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-sm my-6 text-gray-400 text-center lg:text-left">
              I'm a highly motivated and experienced software developer with a
              passion for creating innovative solutions. With over 2 years of
              experience in the industry, I have a proven track record of
              delivering high-quality projects on time and within budget. My
              expertise lies in web development, where I have honed my skills in
              various programming languages and frameworks. I thrive in
              fast-paced environments and enjoy collaborating with
              cross-functional teams to bring ideas to life. I am always eager
              to learn and stay updated with the latest technologies to ensure
              that I can provide the best solutions for my clients.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <SecondButton
              text={"Download CV"}
              href="\JENAKUMO EMMANUEL CV.pdf"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
