import BlueButton from "./BlueButton";
import SecondButton from "./SecondButton";

const Works = ({ image, text }) => {
  return (
    <article className="bg-bg-variant rounded-2xl p-5 flex flex-col border border-transparent transition-all  hover:border-primary hover:bg-primary/10 shadow-md">
      <div className="rounded-3xl overflow-hidden">
        <img src={image} alt="" />
      </div>
      <h3 className="text-sm font-semibold text-primary my-5 mx-1">{text}</h3>
      <div className="flex gap-4 mb-3.5">
        <BlueButton text={"Github"} />
        <SecondButton text={" Demo"} />
      </div>
    </article>
  );
};

export default Works;
