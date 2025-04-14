import { Users, Briefcase, Star } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">About Us</h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">Learn more about our team, mission, and values.</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Users className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We are a group of passionate individuals dedicated to delivering quality and innovation.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Briefcase className="w-8 h-8 text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">To provide exceptional products and services that empower our customers to achieve more.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Star className="w-8 h-8 text-yellow-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Integrity, excellence, and customer satisfaction are at the core of everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
