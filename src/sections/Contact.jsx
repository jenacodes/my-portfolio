import ContactOptionsCard from "../components/ContactOptionsCard";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import Reveal from "../Reveal";
import { motion as Motion } from "framer-motion";

const Contact = () => {
  const contactOptions = [
    {
      icon: <CiMail />,
      title: "Email",
      handle: "jenakumoemmanuel@gmail.com",
      link: "mailto:jenakumoemmanuel@gmail.com",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter",
      handle: "@kingjenathe7th",
      link: "https://x.com/kingjenathe7th",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="mt-32 px-4 md:px-8 lg:px-16" id="contact">
      <div>
        <Reveal delay={0}>
          <h5 className="">Get in touch</h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-xl font-semibold text-center mb-8">Contact Me</h2>
        </Reveal>
      </div>

      <div className="grid gap-[12%] lg:grid-cols-[40%_58%] grid-cols-1 lg:w-[58%] mx-auto">
        <Motion.div
          className="flex flex-col gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactOptions.map((option, i) => (
            <Motion.article
              custom={i}
              variants={fadeIn}
              key={i}
              className="bg-bg-variant flex flex-col items-center justify-center text-center rounded-2xl p-7 transition-all"
            >
              <div className="text-xl mb-4">{option.icon}</div>
              <div className="content-wrapper">
                <h5 className="text-sm font-medium">{option.title}</h5>
                <h5 className="text-xs">{option.handle}</h5>
                <small className="text-blue-500 mt-2 text-xs">
                  <a
                    href={option.link}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a message
                  </a>
                </small>
              </div>
            </Motion.article>
          ))}
        </Motion.div>

        <Motion.form
          action="https://formspree.io/f/xjvjlqzj"
          method="POST"
          className="flex flex-col gap-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-2 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </Motion.form>
      </div>
    </section>
  );
};

export default Contact;
