import { LucidePhone, LucideMail, LucideMessageSquareText } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h1 className="text-4xl font-['Anton'] text-black dark:text-white mb-4">Contact Us</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Contact Information</h2>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <LucidePhone className="text-gray-500 dark:text-gray-400" />
          <p className="text-gray-700 dark:text-gray-300">RED PC Customer Support</p>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <LucideMail className="text-gray-500 dark:text-gray-400" />
          <a
            href="mailto:redpccomputer@gmail.com"
            className="hover:underline text-orange-500 dark:text-orange-400"
          >
            redpccomputer@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <LucideMessageSquareText className="text-gray-500 dark:text-gray-400" />
          <a
            href="#"
            className="hover:underline text-orange-500 dark:text-orange-400"
          >
            RED PC PM
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Hours of Operation</h2>
        <p className="text-gray-700 dark:text-gray-300">Our team is available to assist you during the following hours:</p>
        <p className="text-gray-700 dark:text-gray-300 font-bold">OPEN DAILY: 8:00 AM - 6:00 PM</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Location</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3184893498003!2d121.04465038466465!3d14.717086112425775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1586fd04f03%3A0x6b93b16853aa972f!2sRed%20PC!5e1!3m2!1sen!2sph!4v1743424510237!5m2!1sen!2sph"
          className="w-full h-[300px] rounded-lg border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
