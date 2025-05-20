import { FaCode } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";
const Services = () => {
  return (
    <section className="mt-32" id="services">
      <h5 className="text-xs font-medium">What I offer</h5>
      <h2 className="font-semibold text-xl mb-12">Services</h2>
      <div className="w-[90%]  mx-auto my-0">
        <div className="flex flex-col rounded-4xl py-8 px-4 md:p-8 border border-transparent transition-all">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-5">
            {/* Add your service items here */}
            <div className="flex flex-col items-center justify-evenly h-52  bg-bg-variant p-4 rounded-lg shadow-md">
              <FaCode size={60} />
              <h3 className="text-lg font-semibold">Frontend Development</h3>
            </div>
            <div className="flex flex-col items-center justify-evenly h-52  bg-bg-variant p-4 rounded-lg shadow-md">
              <img
                src="https://princecodes247.github.io/Portfolio-December-2020/img/marketing.png"
                alt=""
              />
              <h3 className="text-lg font-semibold">
                Performance, SEO & accesibility testing
              </h3>
            </div>
            <div className="flex flex-col items-center justify-evenly h-52  bg-bg-variant p-4 rounded-lg shadow-md">
              <GiAutoRepair size={60} />
              <h3 className="text-lg font-semibold">Maintainance</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
