import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="mt-40">
      <footer className="bg-white dark:bg-gray-800 w-full py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li className="my-2">
              <HashLink
                className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                to="/home#home"
              >
                Home
              </HashLink>
            </li>
            <li className="my-2">
              <HashLink
                className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                to="/home#services"
              >
                Services
              </HashLink>
            </li>
            <li className="my-2">
              <HashLink
                className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                to="/home#features"
              >
                Features
              </HashLink>
            </li>
            <li className="my-2">
              <HashLink
                className="text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                to="/home#guidelines"
              >
                Guidelines
              </HashLink>
            </li>
          </ul>

          <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            © all copyright reserved by{"  "}
            <span className="text-green-400 mx-2"> Calida</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
