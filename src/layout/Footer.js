import React from "react";
import { LinkedinIcon, GithubIcon } from "../icons/icon";
const Footer = () => {
  return (
    <div className="flex justify-between items-center py-4 text-sm text-gray-700">
      <div>
        <div>Designed and developed by Elif Nur Karakoç.</div>
        <div>Built with React & Tailwind CSS.</div>
      </div>
      <div className="flex items-center justify-center mt-1">
        <a href="https://github.com/elifnurkarakoc/">
          <GithubIcon className="w-6 h-6 ml-2" />
        </a>
        <a href="https://tr.linkedin.com/in/elif-nur-karakoc">
          <LinkedinIcon className="w-6 h-6 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
