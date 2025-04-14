import {
  LucidePhone,
  LucideMail,
  LucideMapPin,
  Printer,
  Facebook,
} from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-4xl font-['Anton'] text-black dark:text-white mb-6 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-['Anton'] text-black dark:text-white mb-3 flex items-center gap-2">
              <span className="inline-block bg-primary/10 rounded-full p-1"><LucidePhone className="text-primary w-5 h-5" /></span>
              Contact Information
            </h2>

            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <LucideMapPin className="text-primary mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">
                1618 Felix Deleon Street, Tondo, Manila
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <LucidePhone className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Telephone Numbers:</p>
                <ul className="space-y-1">
                  <li>495-3333</li>
                  <li>253-9310</li>
                  <li>495-7878</li>
                  <li>254-8940</li>
                  <li>253-9250</li>
                  <li>253-9359</li>
                  <li>252-3049</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <Printer className="text-primary mt-1 flex-shrink-0" />
              <p>Fax: 254-0132</p>
            </div>

            <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300 mb-3">
              <LucideMail className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-1">Email Addresses:</p>
                <a
                  href="mailto:skycos@yahoo.com"
                  className="hover:underline block"
                >
                  skycos@yahoo.com
                </a>
                <a
                  href="mailto:acctg.sky@gmail.com"
                  className="hover:underline block"
                >
                  acctg.sky@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-['Anton'] text-black dark:text-white mb-3 flex items-center gap-2">
            <span className="inline-block bg-primary/10 rounded-full p-1"><LucideMapPin className="text-primary w-5 h-5" /></span>
            Location
          </h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1021.8957898158457!2d120.97871588891043!3d14.611912310695287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5f861d02a59%3A0xd567e81e16ac4534!2sSky%20Computer%20And%20Office%20Supplies!5e1!3m2!1sen!2sph!4v1744656792507!5m2!1sen!2sph"
            className="w-full h-[350px] rounded-lg border-none"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
