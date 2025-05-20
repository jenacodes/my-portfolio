const ContactOptionsCard = ({ Icon, title, description }) => {
  return (
    <article className="bg-bg-variant flex flex-col items-center justify-center  text-center rounded-2xl p-7 transition-all">
      {Icon && (
        <div className="text-xl mb-4">
          <Icon />
        </div>
      )}
      <div className="content-wrapper">
        {title && <h5 className="text-sm font-medium">{title}</h5>}
        <h5 className="text-xs">{description}</h5>
        <small className="text-blue-500 mt-2 text-xs">
          <a
            href={`mailto:${description}`} // Fixed template literal syntax
            className="text-primary hover:underline"
          >
            Send a message
          </a>
        </small>
      </div>
    </article>
  );
};

export default ContactOptionsCard;
