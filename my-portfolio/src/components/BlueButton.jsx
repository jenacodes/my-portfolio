const BlueButton = ({ text }) => {
  return (
    <a
      href=""
      className="text-primary cursor-pointer inline-flex border border-primary py-3 px-5 rounded-sm hover:bg-white transition-all"
    >
      {text}
    </a>
  );
};

export default BlueButton;
