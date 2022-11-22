import LineGradient from "../components/LineGradient";
import "./Testimonial.css";
import { motion } from "framer-motion";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../assets/nirmal_bro.jpg";
import AVTR2 from "../assets/dada.png";
import AVTR3 from "../assets/surya.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: AVTR1,
    cname: "Nirmal Shrestha",
    title: "President of Operations at CG",
    review: "When our own skills did not manage to get where we wanted, Nischal took care of the rest. The expertize, customer service and follow up we experienced from Nischal and his team was simply flawless."  },
  {
    id: 2,
    image: AVTR2,
    cname: "Mahendra Pratap Khadka",
    title: "Managing Director at Sulabh Rents Pvt. Ltd",
    review: "Under tight deadlines and with high expectations, Nischal was a pleasure to partner with, on a high profile political campaign website. Professional, conscientious and thoroughly competent - I wouldn't hesitate in recommending him to everyone I know."  },
  {
    id: 3,
    image: AVTR3,
    cname: "Surya Shrestha",
    title: "Janitor at Proshore",
    review:"Great work!!! The team was solid, efficient and knowledgeable. They did an amazing job on my very challenging app. I will be using them again. Thank you for doing such a great job! "  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
      </motion.div>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <Swiper
          className="container testimonial__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, cname, title, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt="Avatar One" />
                </div>
                <h5 className="client__name text-red text-2xl">{cname}</h5>
                <p className="text-xl">{title}</p>
                <small className="client__review text-lg">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
};

export default Testimonials;
