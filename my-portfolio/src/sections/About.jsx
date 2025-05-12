import { SlBadge } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import InfoCard from "../components/InfoCard";

const About = () => {
  return (
    <section className="mt-32">
      <h5 className="text-xs font-medium">Get To Know Me</h5>
      <h2 className="font-semibold text-xl mb-12">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] my-0 mx-auto lg:w-[86%]">
        <div className="w-[65%] md:w-[50%] mb-12 mx-auto mt-0 lg:my-8 grid place-items-center h-80  bg-[linear-gradient(45deg,_transparent,_var(--color-primary),_transparent)] rounded-4xl aspect-square">
          <div className="h-[100%] hover:transform rotate-10 rounded-4xl transition-all duration-500 hover:rotate-0">
            <img
              src="\20250327_151044_1.jpg"
              className="h-[100%] object-cover w-[100%] rounded-4xl block"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-3">
            <InfoCard
              Icon={SlBadge}
              title={"Experience"}
              description={"1+ Year Working Experience"}
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
        </div>
      </div>
    </section>
  );
};

export default About;
