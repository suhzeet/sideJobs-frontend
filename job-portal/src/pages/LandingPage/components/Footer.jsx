import { Briefcase, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">SideJobs</h3>
            </div>
            <p className="text-sm text-gray-400">
              Connecting professionals with opportunities worldwide. Your career
              success is our mission.
            </p>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Job Seekers
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Upload Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Employers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Recruitment Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} SideJobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
