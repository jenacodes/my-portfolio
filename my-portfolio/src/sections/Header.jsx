import BlueButton from "../components/BlueButton";
import SecondButton from "../components/SecondButton";

const Header = () => {
  return (
    <header className="h-screen pt-28">
      <div className="w-[75%] mx-auto text-center">
        <h5 className="font-medium">Hello i'm</h5>
        <h1 className="text-4xl my-2.5 font-medium">Jenakumo Emmanuel</h1>
        <h5 className="text-gray-400 text-xs my-5">FullStack developer</h5>
        <div className="flex justify-center gap-4 mt-10">
          <BlueButton />
          <SecondButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
