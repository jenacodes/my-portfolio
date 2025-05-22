const BlueButton = ({
  text,
  href = "#", // default so other buttons still work
  download = undefined, // only set when you want a download
}) => {
  return (
    <a
      href={href}
      download={download}
      className="text-primary cursor-pointer inline-flex border border-primary py-3 px-5 rounded-sm hover:bg-white transition-all"
    >
      {text}
    </a>
  );
};

export default BlueButton;
