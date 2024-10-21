import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-20 cursor-pointer">
      <div className="flex items-center justify-center gap-6 text-3xl">
        <FaFacebookSquare className="hover:scale-125 transition-all duration-150" />
        <FaInstagram className="hover:scale-125 transition-all duration-150" />
        <FaTwitter className="hover:scale-125 transition-all duration-150" />
        <FaLinkedin className="hover:scale-125 transition-all duration-150" />
      </div>
      <span className="text-sm">Copyright @2020 All righs reserved</span>
    </div>
  );
};

export default Footer;
