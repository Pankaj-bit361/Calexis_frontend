import { useState } from "react";

import AllSvg from "../../../common/AllSvg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHoveredSend, setIsHoveredSend] = useState(false);

  return (
    <div className="flex bg-data-scrapper2 flex-col gap-9 lg:gap-6 xl:gap-9 py-[60px] lg:py-[50px] xl:py-[60px] px-[40px] md:px-[60px] lg:px-[60px] xl:px-[80px] relative  lg:snap-start item-center lg:justify-center  lg:h-screen w-screen">
      <div className="flex flex-col gap-9 lg:gap-6 xl:gap-9">
        {/* Logo Section with hover animation */}
        <section className="flex gap-2 items-center group cursor-pointer">
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <AllSvg type="CalexisLogo" />
          </div>
          <p className="text-white text-[28px] lg:text-[22px] xl:text-[28px] nohemi-font leading-9 lg:leading-7 xl:leading-9 transform transition-all duration-300 group-hover:translate-x-1">
            Calaxis
          </p>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col lg:flex-row justify-between gap-9 lg:gap-6 xl:gap-9 lg:gap-0">
          {/* Newsletter Section */}
          <div className="flex flex-col w-[100%] md:w-[70%] lg:w-[25%] gap-6 lg:gap-4 xl:gap-6">
            <p className="text-white text-[16px] lg:text-[14px] xl:text-[16px] font-medium leading-6 lg:leading-5 xl:leading-6 geist-font animate-fade-in">
              Join Our Newsletter
            </p>

            <div className="flex flex-col gap-3 lg:gap-2 xl:gap-3">
              <p className="text-[#C8CACC] text-[16px] lg:text-[14px] xl:text-[16px] leading-6 lg:leading-5 xl:leading-6 geist-font animate-fade-in-delay">
                Subscribe to our newsletter for expert tips, industry updates,
                marketing insights, and exclusive offers to elevate your brand
                success!
              </p>

              <div className="flex w-[100%] lg:w-[80%] gap-2 px-5 lg:px-3 xl:px-5 py-[10px] lg:py-[8px] xl:py-[10px] rounded-[12px] border border-[#191C1F] focus-within:border-blue-500 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:border-[#2a2d31]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 text-white text-[16px] lg:text-[14px] xl:text-[16px] w-[100%] leading-6 lg:leading-5 xl:leading-6 bg-transparent outline-none placeholder:transition-opacity placeholder:duration-300 focus:placeholder:opacity-50"
                />
                <button
                  onMouseEnter={() => setIsHoveredSend(true)}
                  onMouseLeave={() => setIsHoveredSend(false)}
                  className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 p-3 lg:p-2 xl:p-3 rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`text-white transition-transform duration-300 ${
                      isHoveredSend ? "translate-x-1 -translate-y-1" : ""
                    }`}
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Explore Section */}
          <div className="animate-fade-in-delay-2">
            <p className="text-white font-semibold text-lg lg:text-base xl:text-lg mb-4 lg:mb-3 xl:mb-4">Explore</p>
            <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
              {["About Us", "Integration", "Pricing Plan", "Features", "Blog"].map((item, index) => (
                <li key={item} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-in">
                  <a
                    href="#"
                    className="text-[#C8CACC] hover:text-white transition-all duration-300 text-sm lg:text-xs xl:text-sm inline-block hover:translate-x-2 hover:font-medium relative group"
                  >
                    <span className="absolute left-0 w-0 h-[2px] bg-blue-500 bottom-0 group-hover:w-full transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className="animate-fade-in-delay-3">
            <p className="text-white font-semibold text-lg lg:text-base xl:text-lg mb-4 lg:mb-3 xl:mb-4">Support</p>
            <ul className="space-y-3 lg:space-y-2 xl:space-y-3">
              {["Contact Us", "404 Page", "Privacy Policy", "Terms and Conditions"].map((item, index) => (
                <li key={item} style={{ animationDelay: `${index * 0.1 + 0.2}s` }} className="animate-slide-in">
                  <a
                    href="#"
                    className="text-[#C8CACC] hover:text-white transition-all duration-300 text-sm lg:text-xs xl:text-sm inline-block hover:translate-x-2 hover:font-medium relative group"
                  >
                    <span className="absolute left-0 w-0 h-[2px] bg-blue-500 bottom-0 group-hover:w-full transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="animate-fade-in-delay-4">
            <p className="text-white font-semibold text-lg lg:text-base xl:text-lg mb-4 lg:mb-3 xl:mb-4">Follow Us</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 transition-all duration-300 rounded-lg flex items-center justify-center hover:bg-[#1a1d21] hover:scale-110 hover:-translate-y-1 active:scale-95 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <path
                    d="M18.9014 1.7207H22.5816L14.5415 10.91L24 23.4145H16.5941L10.7935 15.8306L4.15631 23.4145H0.473926L9.07356 13.5855L0 1.7207H7.59394L12.8372 8.6527L18.9014 1.7207ZM17.6098 21.2117H19.649L6.48589 3.80776H4.29759L17.6098 21.2117Z"
                    fill="#C8CACC"
                    className="transition-all duration-300 group-hover:fill-white"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1a1d21] hover:scale-110 hover:-translate-y-1 active:scale-95 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <path
                    d="M23.0592 0.970703C23.9699 0.970703 24.7734 1.77427 24.7734 2.73856V23.2564C24.7734 24.2207 23.9699 24.9707 23.0592 24.9707H2.43415C1.52344 24.9707 0.773438 24.2207 0.773438 23.2564V2.73856C0.773438 1.77427 1.52344 0.970703 2.43415 0.970703H23.0592ZM8.00558 21.5421V10.1314H4.46987V21.5421H8.00558ZM6.23772 8.52427C7.36272 8.52427 8.27344 7.61356 8.27344 6.48856C8.27344 5.36356 7.36272 4.39927 6.23772 4.39927C5.05915 4.39927 4.14844 5.36356 4.14844 6.48856C4.14844 7.61356 5.05915 8.52427 6.23772 8.52427ZM21.3449 21.5421V15.2743C21.3449 12.2207 20.6484 9.80999 17.0592 9.80999C15.3449 9.80999 14.1663 10.7743 13.6842 11.685H13.6306V10.1314H10.2556V21.5421H13.7913V15.9171C13.7913 14.4171 14.0592 12.9707 15.9342 12.9707C17.7556 12.9707 17.7556 14.685 17.7556 15.9707V21.5421H21.3449Z"
                    fill="#C8CACC"
                    className="transition-all duration-300 group-hover:fill-[#0077B5]"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-[#1a1d21] hover:scale-110 hover:-translate-y-1 active:scale-95 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <path
                    d="M23.4735 6.64712C24 8.4899 24 12.4387 24 12.4387C24 12.4387 24 16.3437 23.4735 18.2303C23.2102 19.2833 22.3766 20.0731 21.3675 20.3363C19.4808 20.819 12.0219 20.819 12.0219 20.819C12.0219 20.819 4.5192 20.819 2.63254 20.3363C1.6234 20.0731 0.789762 19.2833 0.526508 18.2303C0 16.3437 0 12.4387 0 12.4387C0 12.4387 0 8.4899 0.526508 6.64712C0.789762 5.5941 1.6234 4.76047 2.63254 4.49721C4.5192 3.9707 12.0219 3.9707 12.0219 3.9707C12.0219 3.9707 19.4808 3.9707 21.3675 4.49721C22.3766 4.76047 23.2102 5.5941 23.4735 6.64712ZM9.5649 15.9926L15.7952 12.4387L9.5649 8.88478V15.9926Z"
                    fill="#C8CACC"
                    className="transition-all duration-300 group-hover:fill-[#FF0000]"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="pt-6 flex justify-center animate-fade-in-delay-5">
          <p className="text-[#C8CACC] text-sm text-center md:text-left hover:text-white transition-colors duration-300 cursor-default">
            2025 @Calaxis. All rights reserved.
          </p>
        </section>
      </div>

      
    </div>
  );
};

export default Footer;