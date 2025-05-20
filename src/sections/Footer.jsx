import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/jenacodes/" },
    { icon: FaTwitter, href: "https://x.com/kingjenathe7th" },
  ];
  return (
    <footer className="bg-primary mt-28 py-12 text-center text-sm" id="footer">
      <a href="#" className="text-2xl uppercase text-bg-variant font-bold">
        JENA_CODES
      </a>
      <ul className="flex flex-col lg:flex-row justify-center gap-8 mt-4 mb-12 text-bg-variant">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mb-16">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              className="text-bg-variant text-2xl hover:text-white transition-all duration-200 mx-2"
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <p className="mb-16 text-bg-variant">
        &copy; {new Date().getFullYear()} Jena Codes. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
