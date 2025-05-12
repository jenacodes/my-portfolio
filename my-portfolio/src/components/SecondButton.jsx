const SecondButton = ({ text }) => {
  return (
    <a
      href=""
      className="text-background-color cursor-pointer inline-flex border border-primary py-3 px-5 rounded-sm bg-primary transition-all hover:bg-white"
    >
      {text}
    </a>
  );
};

export default SecondButton;
