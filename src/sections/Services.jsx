import { FaCode } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
import Reveal from "../Reveal";

// variants
import { motion as Motion } from "framer-motion";

const Services = () => {
  return (
    <section className="mt-32" id="services">
      <Reveal delay={0}>
        <h5 className="text-xs font-medium">What I offer</h5>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-semibold text-xl mb-12">Services</h2>
      </Reveal>

      <div className="w-[90%] mx-auto my-0">
        <div className="flex flex-col rounded-4xl py-8 px-4 md:p-8 border border-transparent transition-all">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-5">
            {[
              {
                icon: <FaCode size={60} />,
                title: "Frontend Development",
              },
              {
                icon: (
                  <img
                    src="https://princecodes247.github.io/Portfolio-December-2020/img/marketing.png"
                    alt="Performance"
                    className="w-14 h-14"
                  />
                ),
                title: "Performance, SEO & accessibility testing",
              },
              {
                icon: <GiAutoRepair size={60} />,
                title: "Maintenance",
              },
            ].map((service, i) => (
              <Motion.div
                key={i}
                className="flex flex-col items-center justify-evenly h-52 bg-bg-variant p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {service.icon}
                <h3 className="text-lg font-semibold text-center px-2">
                  {service.title}
                </h3>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
