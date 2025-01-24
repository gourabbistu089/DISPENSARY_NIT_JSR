import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#274187] py-4">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* First Column */}
          <div className="flex flex-col items-center sm:items-start p-2">
            <a href="/" className="inline-block mb-2">
              <img
                className="h-10 sm:h-8 md:h-20 transition-transform duration-300 ease-in-out hover:scale-110"
                alt="logo"
                src="/svg.png"
              />
            </a>
            <p className="text-white text-sm sm:text-base md:text-xl font-bold text-center sm:text-left">
              National Institute of Technology, Jamshedpur
            </p>
            <div className="text-white flex items-center justify-center sm:justify-start my-2 transition-transform duration-300 ease-in-out hover:scale-110">
            <svg className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150 mr-2 bi bi-geo-alt-fill"
     xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>



              <a
                href="https://www.google.com/maps/place/NIT+Dispensary/@22.7784574,86.1419552,18z/data=!4m14!1m7!3m6!1s0x39f5e4daa475a5cd:0xd87b53fadcd771a1!2sNational+Institute+of+Technology,+Jamshedpur!8m2!3d22.7770174!4d86.144116!16zL20vMDh0X3Bn!3m5!1s0x39f5e4db044b80ab:0x123eebf5e011ab34!8m2!3d22.7794243!4d86.1425154!16s%2Fg%2F12611m5zy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs sm:text-sm md:text-sm"
              >
                Adityapur, Jamshedpur, Jharkhand 831014
              </a>
            </div>

            <div className="flex space-x-2 my-1">
              <a
                href="https://www.facebook.com/NITJamshedpurOfficial/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nitjamshedpur_official/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/jamshedpur_nit"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjiZyMKfBnK4-JYfyz1dG3A"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <svg
                  className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.764-42.227-48.311-48.502C456.499 64 288 64 288 64S119.501 64 74.656 75.581c-23.547 6.276-42.03 24.852-48.311 48.502-11.516 43.386-11.516 134.101-11.516 134.101s0 90.715 11.516 134.101c6.281 23.65 24.764 42.227 48.311 48.502C119.501 448 288 448 288 448s168.499 0 213.344-11.581c23.547-6.276 42.03-24.852 48.311-48.502 11.516-43.386 11.516-134.101 11.516-134.101s0-90.715-11.516-134.101zm-317.87 213.312V174.606L402.049 256 231.785 337.395z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center sm:items-start p-2">
            <h4 className="text-white mb-2 text-sm sm:text-base md:text-base font-bold">
              ~Quick Links
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center sm:justify-start">
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="/"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Home
                </a>
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://nitjsr.ac.in/Institute/About_NITJSR"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  About Us
                </a>
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://sites.google.com/nitjsr.ac.in/centrallibrary/home"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Library
                </a>
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://nitjsr.ac.in/Recruitments"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Recruitments
                </a>
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://nitjsr.ac.in/Students/Student-Activities"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Activities
                </a>
              </li>

              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://nitjsr.ac.in/Students/Anti-Ragging"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Anti-Ragging
                </a>
              </li>
              <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                <a
                  href="https://nitjsr.ac.in/academic/Departments"
                  className="text-white text-xs sm:text-sm md:text-sm"
                >
                  Departments
                </a>
              </li>
              <li className=" transition-transform duration-300 ease-in-out hover:scale-110">
              <Link to="/ai" className="text-white text-xs sm:text-sm md:text-sm">
               D_AI
              </Link>
              </li>
                     
            </ul>
            <div className="mt-4">
              <Link
                to="/team"
                className="inline-block p-2 border-2 border-gray-200 text-white text-xs sm:text-sm md:text-base text-center transition-transform duration-300 ease-in-out hover:scale-110 rounded-lg"
              >
                Designed and Developed BY
              </Link>
            </div>
            
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center sm:items-start p-2">
            <h4 className="text-white mb-2 text-sm sm:text-base md:text-base font-bold">
              ~Contact
            </h4>
            <div className="flex flex-col items-center sm:items-start">
              <a
                href="mailto:registrar@nitjsr.ac.in"
                className="text-white flex items-center mb-2 transition-transform duration-300 ease-in-out hover:scale-110 text-xs sm:text-sm md:text-sm"
              >
              <svg className="h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150 mr-2 bi bi-envelope-fill"
     xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" viewBox="0 0 16 16">
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>

            
                registrar@nitjsr.ac.in
              </a>
              <a
                href="tel:+916572462737"
                className="text-white flex items-center mb-2 transition-transform duration-300 ease-in-out hover:scale-110 text-xs sm:text-sm md:text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-2 h-4 sm:h-5 md:h-6 transition-transform duration-300 ease-in-out hover:scale-150"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>

                <span>+91-657-2462737</span>
              </a>
            </div>
            <h5 className="text-white mt-3 text-sm sm:text-base md:-base font-bold">
              ~Working Hours
            </h5>
            <div className="text-white mt-1 text-center sm:text-left text-xs sm:text-sm md:text-base">
              <div>Monday - Friday</div>
              <div>09:00 AM - 01:00 PM</div>
              <div>03:00 PM - 05:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
