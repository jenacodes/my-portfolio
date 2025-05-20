const InfoCard = ({ Icon, title, description, className = "" }) => (
  <article
    className={`p-9 text-center flex items-center flex-col rounded-2xl transition-all bg-bg-variant border border-transparent hover:border-primary ${className}`}
  >
    {Icon && <Icon className="text-xl text-primary mb-4" />}
    {title && <h5 className="text-sm font-medium">{title}</h5>}
    {description && (
      <small className="text-gray-400 mt-2 text-xs">{description}</small>
    )}
  </article>
);

export default InfoCard;
