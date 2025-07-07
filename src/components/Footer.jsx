import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import AQTCLogo from "./AQTCLogo";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, url: "/" },
    { icon: FaLinkedinIn, url: "/" },
  ];

  return (
    <div className="bg-[#F9F9F9] text-gray-800">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
         <div className="md:col-span-1">
          <AQTCLogo />
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-2xl font-bold mb-2 text-green-600">| Navigation</h4>
          <ul className="space-y-1">
            {["/", "/about", "/services", "/blog", "/contact"].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-green-700 transition-colors duration-200 block text-xl"
                >
                  {[">Home", ">About Us", ">Services", ">Blog", ">Contact us"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info + Social Media */}
        <div>
          <div className="flex justify-between items-start flex-wrap gap-4">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold mb-2 text-green-600">
                | Get In Touch
              </h4>
              <div className="flex items-center gap-2 mb-2 cursor-pointer group">
  <FaPhoneAlt className="text-brown group-hover:text-green-700 transition duration-300" />
  <p className="text-xl text-brown group-hover:text-green-700 transition duration-300">(303) 378-8273</p>
</div>
<div className="flex items-center gap-2 mb-2 cursor-pointer group">
  <FaEnvelope className="text-brown group-hover:text-green-700 transition duration-300" />
  <p className="text-xl text-brown group-hover:text-green-700 transition duration-300">Tom@aqtc.co</p>
</div>
<div className="flex items-center gap-2 cursor-pointer group">
  <FaHome className="text-brown group-hover:text-green-700 transition duration-300" />
  <p className="text-xl text-brown group-hover:text-green-700 transition duration-300">Aspen, Colorado</p>
</div>

            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2 text-green-500"> | Social Media</h4>
              <div className="flex items-center gap-4">
                {socialIcons.map(({ icon: Icon, url }, idx) => (
                  <Link
                    key={idx}
                    to={url}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-brown-700 hover:text-green-700 transition-all duration-300 shadow transform hover:-translate-y-1"
                  >
                    <Icon className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-700 text-white text-center py-4 text-sm">
        © Copyright 2025 American Quality Tree Care LLC - All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
