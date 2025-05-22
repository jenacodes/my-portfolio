import BlueButton from "./BlueButton";
import SecondButton from "./SecondButton";

const Works = ({ image, text, description, githubLink, demoLink }) => {
  return (
    <article className="bg-bg-variant rounded-2xl p-5 flex flex-col border border-transparent transition-all hover:border-primary hover:bg-primary/10 shadow-md">
      <div className="rounded-3xl overflow-hidden h-48 md:h-56 lg:h-64">
        <img
          src={image}
          alt={text}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-semibold text-blue-500 my-5 mx-1 line-clamp-2">
        {text}
      </h3>
      <p className="text-gray-400 text-xs mb-3.5">{description}</p>
      <div className="flex gap-4 mt-auto">
        <BlueButton text="GitHub " href={githubLink} />
        <SecondButton text="Demo" url={demoLink} />
      </div>
    </article>
  );
};

export default Works;
