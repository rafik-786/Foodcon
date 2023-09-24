import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-white text-opacity-70 font-bol py-2">
      <div className="flex w-[85%] mx-auto  justify-between items-center ">
        <div></div>
        <h1>Made by Rafikul with ❤️</h1>
        <div className="flex  items-center space-x-5">
          <h1 className="mb-1">Follow Me</h1>
          <div className="flex space-x-3 text-white">
            <Link to="https://github.com/rafik-786">
              <AiFillGithub className="hover:text-yellow-300 hover:cursor-pointer" />
            </Link>
            <Link to="">
              <AiFillInstagram className="hover:text-yellow-300 hover:cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
