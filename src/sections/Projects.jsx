import Works from "../components/Works";

const Projects = () => {
  return (
    <section className="mt-32" id="projects">
      <h5 className="">Recent work</h5>
      <h2 className="font-semibold text-xl mb-12">My Projects</h2>
      <div className="w-[90%] lg:w-[80%] my-0 mx-auto grid grid-cols-1 gap-6 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Works
          image={"images/Netflux.png"}
          text={"Netflux"}
          description={
            "Netflux is a movie search application built with React and Vite. It allows users to search for movies and view details about them, providing a seamless and interactive experience."
          }
          githubLink={"https://github.com/jenacodes/netflux"}
          demoLink={"https://netflux-eta.vercel.app/"}
        />
        <Works
          image={"images/Exness.png"}
          text={"Exness"}
          description={
            "A clone of the Exness website, built with React and Tailwind CSS."
          }
          githubLink={"https://github.com/jenacodes/exness"}
          demoLink={"exness-navy.vercel.app"}
        />
        <Works
          image={"images/Homeverse.png"}
          text={"Homeverse"}
          description={
            "Homeverse is fully responsive Real estate website,Responsive for all devices, built using HTML, CSS, and JavaScript."
          }
          githubLink={"https://github.com/jenacodes/Homeverse"}
          demoLink={"homeverse-psi.vercel.app"}
        />
        <Works
          image={"images/urban-census.png"}
          text={"Urban Census"}
          description={
            "This project is a simple web application that allows users to search for cities or states in Nigeria. "
          }
          githubLink={"https://github.com/jenacodes/urban-census"}
        />
        <Works
          image={"images/cart.png"}
          text={"Product list with cart"}
          description={
            "A frontend mentor challenge. A product list with a cart functionality. Built with Html, CSS, and JavaScript."
          }
          githubLink={
            "https://github.com/jenacodes/product-list-with-cart-main"
          }
        />
        <Works
          image={"images/video-player.png"}
          text={"Custom Video Player"}
          description={
            "This is a custom video player built using HTML, CSS, and JavaScript. The player allows users to play, pause, and control the video playback. It also includes features such as volume control, playback rate control, and fullscreen mode with keyboard shortcuts."
          }
          githubLink={"https://github.com/jenacodes/10---CUSTOM-VIDEO-PLAYER"}
        />
      </div>
    </section>
  );
};

export default Projects;
