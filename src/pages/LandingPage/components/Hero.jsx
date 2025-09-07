import { motion } from "framer-motion";
import { Search, ArrowRight, Users, Building2, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active Users", value: "2.4M+" },
    { icon: Building2, label: "Providers", value: "50K+" },
    { icon: TrendingUp, label: "Jobs Posted", value: "150K+" },
  ];

  return (
    <section className="pt-18 pb-16 bg-white min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-10"
          >
            Work <span className="text-blue-600">or</span> Hire
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Anytime, Anywhere
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            From small side gigs to professional projects — post or find jobs in
            one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-16 flex-wrap md:flex-nowrap"
          >
            {/* Find Jobs Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-1 sm:space-x-2 md:space-x-3"
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
              <span>Find Jobs</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Post Job Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border-2 border-gray-200 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => navigate(isAuthenticated ? "/post-job" : "/login")}
            >
              Post a Job
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center space-y-1 sm:space-y-2 md:space-y-2 p-2 sm:p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-1 sm:mb-2">
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-6 text-blue-600" />
                </div>
                <div className="text-lg sm:text-2xl md:text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-20" />
      </div>
    </section>
  );
};

export default Hero;
