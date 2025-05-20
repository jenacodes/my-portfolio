import { LiaHomeSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaHeartPulse } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-scroll";

const NavItems = [
  { name: "Home", icon: LiaHomeSolid, to: "home" },
  { name: "About", icon: CiUser, to: "about" },
  { name: "Skills", icon: PiReadCvLogoFill, to: "skills" },
  { name: "Projects", icon: FaHeartPulse, to: "projects" },
  { name: "Contact", icon: AiOutlineMessage, to: "contact" },
];
const Nav = () => {
  return (
    <nav className="fixed transform translate backdrop-blur-lg bg-black/30 bottom-11 rounded-[3rem] w-max z-10 left-[50%] translate-x-[-50%] flex gap-4 p-2 ">
      {NavItems.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            className="flex items-center gap-2 p-4 text-white hover:bg-bg-variant rounded-[3rem] transition-all duration-200 cursor-pointer"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            activeClass="bg-bg-variant text-white"
            to={link.to}
          >
            <Icon className="text-xl" />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
