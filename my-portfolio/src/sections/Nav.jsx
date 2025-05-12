import { LiaHomeSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaHeartPulse } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

const NavItems = [
  { name: "Home", Icon: LiaHomeSolid, url: "#home" },
  { name: "About", Icon: CiUser, url: "#about" },
  { name: "Skills", Icon: PiReadCvLogoFill, url: "#skills" },
  { name: "Projects", Icon: FaHeartPulse, url: "#projects" },
  { name: "Contact", Icon: AiOutlineMessage, url: "#contact" },
];
const Nav = () => {
  return (
    <div className="fixed transform translate backdrop-blur-lg rounded-[3rem] "></div>
  );
};

export default Nav;
