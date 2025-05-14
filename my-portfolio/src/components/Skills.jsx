const Skills = ({ Icon, title, level, iconClassName }) => {
  return (
    <div className="flex gap-4">
      {Icon && <Icon className={iconClassName} />}
      <div>
        {title && <h3 className=" font-semi-bold text-xl">{title}</h3>}
        {level && <small className="text-gray-500 text-sm">{level}</small>}
      </div>
    </div>
  );
};

export default Skills;
