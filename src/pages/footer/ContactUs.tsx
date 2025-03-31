import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-[hsl(356,66.7%,40%)] via-[hsl(352,59%,47%)] to-[hsl(356,66.7%,40%)] p-5 text-center rounded">
        <h1 className="text-yellow-400 text-2xl">Contact Us</h1>
      </div>

      <div className="flex justify-between gap-5 p-6 rounded-lg mt-4">
        <div className="flex-1">
          <h2 className="text-yellow-400">📞 Contact Us</h2>
          <p className="leading-relaxed text-gray-300">📧 <a href="mailto:redpccomputer@gmail.com" className="text-yellow-400 no-underline">redpccomputer@gmail.com</a></p>
          <p className="leading-relaxed text-gray-300">💬 <a href="#" className="text-yellow-400 no-underline">RED PC PM</a></p>

          <h3 className="text-yellow-400">Hours of Operation</h3>
          <p className="leading-relaxed text-gray-300">Our team is available to assist you during the following hours:</p>
          <p className="leading-relaxed text-gray-300"><strong>OPEN DAILY:</strong> 8:00 AM - 6:00 PM</p>
        </div>

        <div className="flex-1">
          <h2 className="text-yellow-400">Google Maps</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1089.3184893498003!2d121.04465038466465!3d14.717086112425775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1586fd04f03%3A0x6b93b16853aa972f!2sRed%20PC!5e1!3m2!1sen!2sph!4v1743424510237!5m2!1sen!2sph"
            className="w-full h-[300px] rounded-lg border-none"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;