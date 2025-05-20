import Works from "../components/Works";

const Projects = () => {
  return (
    <section className="mt-32" id="projects">
      <h5 className="">Recent work</h5>
      <h2 className="font-semibold text-xl mb-12">My Projects</h2>
      <div className="w-[90%] lg:w-[75%] my-0 mx-auto grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
        <Works
          image={"images/gratisography-augmented-reality.jpg"}
          text={"Gratisography Augmented Reality"}
        />
      </div>
    </section>
  );
};

export default Projects;
