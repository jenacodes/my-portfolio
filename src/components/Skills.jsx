const Skills = ({ Icon, title, iconClassName }) => {
  return (
    <span className="bg-bg-variant group flex items-center justify-center relative overflow-hidden transition-all duration-300 h-10 hover:scale-110">
      <span>
        {title && (
          <h3 className="flex items-center justify-center h-full w-full font-semibold text-xl overflow-hidden text-center">
            {title}
          </h3>
        )}
      </span>

      <div
        className="
          absolute right-[5%] top-1/2 
          -translate-y-1/2 
          flex justify-center items-center 
          opacity-0 
          transition-all duration-300 
          group-hover:opacity-100
        "
      >
        {Icon && <Icon className={iconClassName} />}
      </div>
    </span>
  );
};

export default Skills;
