import Works from "../components/Works";
import Reveal from "../Reveal";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    image: "images/Netflux.png",
    text: "Netflux",
    description:
      "Netflux is a movie search application built with React and Vite. It allows users to search for movies and view details about them, providing a seamless and interactive experience.",
    githubLink: "https://github.com/jenacodes/netflux",
    demoLink: "https://netflux-eta.vercel.app/",
  },
  {
    image: "images/Exness.png",
    text: "Exness",
    description:
      "A clone of the Exness website, built with React and Tailwind CSS.",
    githubLink: "https://github.com/jenacodes/exness",
    demoLink: "https://exness-navy.vercel.app/",
  },
  {
    image: "images/Homeverse.png",
    text: "Homeverse",
    description:
      "Homeverse is a fully responsive Real estate website built using HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/jenacodes/Homeverse",
    demoLink: "https://homeverse-psi.vercel.app/",
  },
  {
    image: "images/urban-census.png",
    text: "Urban Census",
    description:
      "This project is a simple web application that allows users to search for cities or states in Nigeria.",
    githubLink: "https://github.com/jenacodes/urban-census",
  },
  {
    image: "images/cart.png",
    text: "Product list with cart",
    description:
      "A frontend mentor challenge. A product list with a cart functionality. Built with HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/jenacodes/product-list-with-cart-main",
  },
  {
    image: "images/video-player.png",
    text: "Custom Video Player",
    description:
      "A custom video player built using HTML, CSS, and JavaScript. Includes features like volume, speed, fullscreen, and keyboard shortcuts.",
    githubLink: "https://github.com/jenacodes/10---CUSTOM-VIDEO-PLAYER",
  },
];

const Projects = () => {
  return (
    <section className="mt-32" id="projects">
      <div>
        <Reveal delay={0}>
          <h5 className="">Recent work</h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-semibold text-xl mb-12">My Projects</h2>
        </Reveal>
      </div>
      <div className="w-[90%] lg:w-[80%] my-0 mx-auto grid grid-cols-1 gap-6 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Works {...project} />
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
