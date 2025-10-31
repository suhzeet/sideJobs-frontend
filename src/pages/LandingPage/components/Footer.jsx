import { Briefcase, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      className="py-12 bg-gray-900 text-gray-300 font-sans"
      ref={footerRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <h3
                className="text-gray-50 font-bold"
                style={{ fontSize: "20px" }}
              >
                SideJobs
              </h3>
            </div>
            <p
              className="text-gray-400"
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                letterSpacing: "0.25px",
              }}
            >
              Connecting professionals with opportunities worldwide. Your career
              success is our mission.
            </p>
          </motion.div>

          {/* Job Seekers */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-gray-50 font-bold mb-4"
              style={{ fontSize: "20px" }}
            >
              Job Seekers
            </h3>
            <ul className="space-y-2">
              {[
                "Browse Jobs",
                "Upload Resume",
                "Career Advice",
                "Help Center",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: "16px", letterSpacing: "0.25px" }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Employers */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-gray-50 font-bold mb-4"
              style={{ fontSize: "20px" }}
            >
              Employers
            </h3>
            <ul className="space-y-2">
              {[
                "Post a Job",
                "Employer Dashboard",
                "Recruitment Plans",
                "Support",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontSize: "16px", letterSpacing: "0.25px" }}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div va riants={itemVariants}>
            <h3
              className="text-gray-50 font-bold mb-4"
              style={{ fontSize: "20px" }}
            >
              Connect
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon style={{ width: "22px", height: "22px" }} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p style={{ fontSize: "16px" }}>
            &copy; {new Date().getFullYear()} SideJobs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
