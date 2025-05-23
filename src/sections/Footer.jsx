import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Experience", to: "skills" },
    { label: "Services", to: "services" },
    { label: "Portfolio", to: "home" },
    { label: "Testimonials", to: "testimonials" },
    { label: "Contact", to: "contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/jenacodes/" },
    { icon: FaTwitter, href: "https://x.com/kingjenathe7th" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <footer className="bg-primary mt-28 py-12 text-center text-sm" id="footer">
      <Motion.a
        href="#"
        className="text-2xl uppercase text-bg-variant font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        JENA_CODES
      </Motion.a>
      <Motion.ul
        className="flex flex-col lg:flex-row justify-center gap-8 mt-4 mb-12 text-bg-variant"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {navLinks.map((link, index) => (
          <Motion.li key={link.label} variants={fadeInUp} custom={index}>
            <Link
              className="hover:text-white transition-all duration-200"
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              to={link.to}
            >
              {link.label}
            </Link>
          </Motion.li>
        ))}
      </Motion.ul>

      <Motion.div
        className="flex justify-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <Motion.a
              key={link.href || index}
              href={link.href}
              variants={fadeInUp}
              custom={index}
              className="text-bg-variant text-2xl hover:text-white transition-all duration-200 mx-2"
            >
              <Icon />
            </Motion.a>
          );
        })}
      </Motion.div>

      <Motion.p
        className="mb-16 text-bg-variant"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={4}
      >
        &copy; {new Date().getFullYear()} Jena Codes. All rights reserved.
      </Motion.p>
    </footer>
  );
};

export default Footer;
