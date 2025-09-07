import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 20 }}
            >
              <Briefcase className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              SideJobs
            </span>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a
              onClick={() => navigate("/find-jobs")}
              className="text-gray-600 hover:text-purple-700 font-medium text-base md:text-lg cursor-pointer transition-colors"
            >
              Browse Jobs
            </a>
            <a
              onClick={() => navigate(isAuthenticated ? "/post-job" : "/login")}
              className="text-gray-600 hover:text-purple-700 font-medium text-base md:text-lg cursor-pointer transition-colors"
            >
              Post a Job
            </a>
          </motion.nav>

          {/* Auth Buttons */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 text-sm md:text-base">
                  Hi, {user?.fullName}
                </span>
                <a
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-sm md:text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <>
                <a
                  href="/login"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm md:text-base px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-sm md:text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign Up
                </a>
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className={`md:hidden py-4 px-4 border-t ${
            scrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <a
              onClick={() => {
                navigate("/find-jobs");
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-purple-700 font-medium text-base py-2 cursor-pointer"
            >
              Browse Jobs
            </a>
            <a
              onClick={() => {
                navigate(isAuthenticated ? "/post-job" : "/login");
                setIsMenuOpen(false);
              }}
              className="text-gray-600 hover:text-purple-700 font-medium text-base py-2 cursor-pointer"
            >
              Post a Job
            </a>
            {isAuthenticated ? (
              <motion.button
                onClick={() => {
                  navigate("/dashboard");
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 w-full text-white px-4 py-2 rounded-md text-sm md:text-base mt-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Dashboard
              </motion.button>
            ) : (
              <>
                <a
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-purple-700 font-medium text-base py-2 cursor-pointer"
                >
                  Login
                </a>
                <motion.button
                  onClick={() => {
                    navigate("/signup");
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 w-full text-white px-4 py-2 rounded-md text-sm md:text-base mt-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up
                </motion.button>
              </>
            )}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
