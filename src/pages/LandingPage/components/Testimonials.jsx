import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote:
        "SideJobs made it super easy to find flexible projects while studying. I can now earn and build my skills at the same time.",
      name: "Prashanta Poudel",
      //   title: "Backend Developer",
      avatar: "PP",
    },
    {
      quote:
        "Hiring part-time staff used to be difficult. With SideJobs, I found verified workers for my startup within a few hours.",
      name: "Sujit Neupane",
      //   title: "Frontend Developer",
      avatar: "SN",
    },
    {
      quote:
        "The chat system and simple job listings helped me connect directly with employers. It’s exactly what I needed.",
      name: "Prashant Poudel",
      //   title: "Graphic Designer",
      avatar: "PP",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voices from Our{" "}
            <span className=" text-blue-600 bg-clip-text">Users</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            People and employers across Nepal share how SideJobs helped them
            connect, work, and grow together.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white px-8 py-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-white transition duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{
                // y: -6,
                scale: 1.01,
              }}
            >
              <div className="mb-6">
                <motion.svg
                  className="h-7 w-7 text-blue-600 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <path d="M9 11h2v10H3v-6c0-2.8 1.7-5 4-6zm10 0h2v10h-8v-6c0-2.8 1.7-5 4-6z" />
                </motion.svg>
                <p className="text-gray-700 italic leading-relaxed text-xl">
                  “{t.quote}”
                </p>
              </div>

              <div className="flex items-center">
                <div className="h-11 w-11 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold mr-3">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xl">
                    {t.name}
                  </p>
                  <p className="text-md text-gray-600">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
