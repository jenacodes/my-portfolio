// Testimonials.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion as Motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Reveal from "../Reveal";

const data = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Jane Doe",
    review:
      "“Working with this team was a breeze. The quality and turnaround time were exceptional!”",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Smith",
    review:
      "“Truly impressed by their attention to detail and dedication. Highly recommended.”",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Sara Lee",
    review:
      "“They took our vision and made it better than we imagined. Fantastic experience.”",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-32 px-4 md:px-8 lg:px-16" id="testimonials">
      <div>
        <Reveal delay={0}>
          <h5 className="">Review from clients</h5>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-xl font-semibold text-center mb-8">
            Testimonials
          </h2>
        </Reveal>
      </div>

      {/* Add relative positioning to the container */}
      <div className="max-w-xl mx-auto relative pb-16">
        {" "}
        {/* Added padding-bottom */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            // Add custom class for pagination container
            el: ".custom-pagination",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
          }}
          className="py-4"
        >
          {data.map(({ id, avatar, name, review }) => (
            <SwiperSlide key={id}>
              <article className="bg-bg-variant rounded-2xl p-6 flex flex-col items-center text-center shadow-md h-full">
                <Motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: id * 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-24 rounded-full overflow-hidden mb-4"
                >
                  <img
                    src={avatar}
                    alt={`${name} avatar`}
                    className="object-cover w-full h-full"
                  />
                </Motion.div>
                <Reveal delay={0.2}>
                  <h3 className="text-xs mb-2">{name}</h3>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-gray-600 text-sm">{review}</p>
                </Reveal>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container - positioned outside the card */}
        <div className="custom-pagination absolute bottom-2.5 text-center translate-z-0 gap-2 mt-8" />
      </div>
    </section>
  );
};

export default Testimonials;
