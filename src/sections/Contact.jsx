import ContactOptionsCard from "../components/ContactOptionsCard";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mt-32 px-4 md:px-8 lg:px-16" id="contact">
      <h5 className="">Get in touch</h5>
      <h2 className="text-xl font-semibold text-center mb-8">Contact Me</h2>

      <div className="grid gap-[12%] lg:grid-cols-[40%_58%] grid-cols-1 lg:w-[58%] mx-auto">
        <div className="flex flex-col gap-4">
          <article className="bg-bg-variant flex flex-col items-center justify-center  text-center rounded-2xl p-7 transition-all">
            <div className="text-xl mb-4">
              <CiMail />
            </div>
            <div className="content-wrapper">
              <h5 className="text-sm font-medium">Email</h5>
              <h5 className="text-xs">jenakumoemmanuel@gmail.com</h5>
              <small className="text-blue-500 mt-2 text-xs">
                <a
                  href={`mailto:jenakumoemmanuel@gmail.com`} // Fixed template literal syntax
                  className="text-primary hover:underline"
                >
                  Send a message
                </a>
              </small>
            </div>
          </article>
          <article className="bg-bg-variant flex flex-col items-center justify-center  text-center rounded-2xl p-7 transition-all">
            <div className="text-xl mb-4">
              <FaTwitter />
            </div>
            <div className="content-wrapper">
              <h5 className="text-sm font-medium">twitter</h5>
              <h5 className="text-xs">@kingjenathe7th</h5>
              <small className="text-blue-500 mt-2 text-xs">
                <a
                  href="https://x.com/kingjenathe7th" // Fixed template literal syntax
                  className="text-primary hover:underline"
                >
                  Send a message
                </a>
              </small>
            </div>
          </article>
        </div>

        <form
          action="https://formspree.io/f/xjvjlqzj"
          method="POST"
          className="flex flex-col gap-4"
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
