"use client";
import { useState } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showMessage, setShowMessage] = useState(false);

  const handleContactClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <footer
      className="relative w-full pt-20 pb-10 bg-black-100 text-white"
      id="contact"
    >
      <div className="absolute inset-x-0 -bottom-72 min-h-96 z-0">
        <Image
          src="/footer-grid.svg"
          alt="Footer grid background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://www.linkedin.com/in/balaji-ramu05/"
          onClick={handleContactClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {showMessage && (
          <div className="mt-4 px-4 py-2 rounded-lg bg-green-600 text-white text-sm animate-fade-in-down">
            Opening LinkedIn...
          </div>
        )}
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 flex mt-16 flex-col md:flex-row justify-between items-center gap-6 px-6">
        <p className="text-white-300 text-sm md:text-base">
          &copy; {currentYear} Balaji R.
        </p>
        <div className="flex items-center gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social link"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg hover:scale-110 transition-transform"
            >
              <Image
                src={info.img}
                alt="icon"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;