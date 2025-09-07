import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const findWorkFeatures = [
  {
    icon: Search,
    title: "Smart Job Search",
    description:
      "Easily discover jobs near you or remote gigs that match your skills and availability.",
  },
  {
    icon: FileText,
    title: "Quick Profile Setup",
    description:
      "Skip lengthy resumes — create a simple profile to start applying instantly.",
  },
  {
    icon: MessageSquare,
    title: "Direct Chat",
    description:
      "Message job posters directly and clarify details before accepting work.",
  },
  {
    icon: Award,
    title: "Build Trust",
    description:
      "Complete tasks, earn ratings, and grow your reputation for better opportunities.",
  },
];

export const postWorkFeatures = [
  {
    icon: Users,
    title: "Access Local Talent",
    description:
      "Find workers, freelancers, or part-timers quickly from your community.",
  },
  {
    icon: BarChart3,
    title: "Track Applicants",
    description:
      "Manage job posts and easily track who applied, chatted, or got hired.",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description:
      "Hire confidently with verified users and community-reviewed ratings.",
  },
  {
    icon: Clock,
    title: "Post in Minutes",
    description:
      "No lengthy forms — post a job in under 2 minutes and start getting responses.",
  },
];

// Navigation items configuration
export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

// Categories and job types
export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer-service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Contract", label: "Contract" },
  { value: "Internship", label: "Internship" },
  {
    value: "On-Site",
    label: "On-Site",
  },
];

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];
