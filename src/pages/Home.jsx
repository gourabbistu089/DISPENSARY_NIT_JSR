// src/pages/Home.jsx
import React from "react";
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick slider CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick slider theme CSS
 
const Home = () => {
  const sliderImages = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
  ];
  const doc = [
    {
      src:  "/doctor1.png",
      name:"Dr. Abhay",
      specialization:"Cardiologist",
    },
    {
      src:  "/doctor2.png",
      name:"Dr. Abhay",
      specialization:"Radiologist",
    }
    ,
   
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const doctorsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 20 ,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
  };

  return (
    <main className=" p-3 font-medium">
      {/* Slider Section */}
      <section className="slider-container mb-8 w-4/5 m-auto">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className=" w-full  object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      <section id="feature" className="w-full px-4 my-8">
        <div className="container mx-auto px-2.5  p-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center shadow-lg rounded-lg bg-white overflow-hidden">
            {[
              {
                href: "https://www.nitjsr.ac.in/MediaCoverage",
                imgSrc: "/a.png",
                title: "Media Corner",
                description: "NIT JSR in news",
                bgColor: "rgb(245, 248, 253)",
              },
              {
                href: "https://www.nitjsr.ac.in/Students/Placements",
                imgSrc: "/b.svg",
                title: "Placements",
                description: "Placement section",
                bgColor: "rgb(255, 255, 255)",
              },
              {
                href: "https://www.nitjsr.ac.in/internalLinks",
                imgSrc: "/c.png",
                title: "Internal Links",
                description: "Official institute link",
                bgColor: "rgb(245, 248, 253)",
              },
              {
                href: "https://www.nitjsr.ac.in/Notices/Students",
                imgSrc: "/d.png",
                title: "Notices",
                description: "Notices and office orders",
                bgColor: "rgb(255, 255, 255)",
              },
              {
                href: "https://www.nitjsr.ac.in/Alumni",
                imgSrc: "/e.png",
                title: "Alumni Corner",
                description: "Alumni section of NIT JSR",
                bgColor: "rgb(245, 248, 253)",
              },
            ].map((link, index) => (
              <a
                key={index}
                target="_self"
                rel="noopener noreferrer"
                className="quick_link_container flex flex-col  items-center justify-center p-5 w-full sm:w-1/2 lg:w-1/5 transition-transform transform hover:-translate-y-4"
                href={link.href}
                style={{ backgroundColor: link.bgColor }}
              >
                <img
                  alt="img"
                  src={link.imgSrc}
                  className="thumbnail w-14 h-15"
                />
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg">
                  {link.title}
                </h3>
                <p className="hidden lg:block text-center">
                  {link.description}
                </p>
                <i
                  className="right_arrow hidden lg:block"
                  style={{ display: "inline-block" }}
                >
                  <svg
                    fill="currentColor"
                    height="40"
                    width="40"
                    viewBox="0 0 1792 1792"
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                  >
                    <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z"></path>
                  </svg>
                </i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="socialFundraising" className="w-full px-4 my-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2.5">
            {/* Director's Corner Section */}
            <div className="w-full md:w-1/2 px-2.5 mb-4">
              <div className="p-4 border border-gray-300 rounded-lg">
                <h2 className="text-lg md:text-xl font-semibold mb-4 bg-blue-900 text-white p-2">
                  Director's Corner
                </h2>
                <div className="director_content_container flex flex-col md:flex-row">
                  <img
                    src="/director.jpg"
                    alt="director"
                    className="w-32 h-40 md:w-35 md:h-40 mr-4 mb-4 md:mb-0"
                  />
                  <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg">
                    NIT Jamshedpur has a rich legacy of more than sixty
                    dedicated years of service to the nation and its pride of
                    Jharkhand. NIT Jamshedpur takes extreme pride in the fact
                    that it has been occupying a unique position in imparting
                    technological education to Indian youth. Since its
                    inception, the institute has had a vision to provide quality
                    technical education and to facilitate scientific and
                    technological research, coupled with a mission to develop
                    human potential to its zenith with excellence in teaching
                    and high quality research. <span> </span>
                    <span className="director_content">
                      <a
                        className="learn__more-btn inline-flex items-center text-blue-600 hover:underline"
                        href="https://www.nitjsr.ac.in/Administration/Director"
                      >
                        <span className="btn_text">read more...</span>
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision & Mission Section */}
            <div className="w-full md:w-1/2 px-2.5 mb-4">
              <div className="p-4 border border-gray-300 rounded-lg">
                <h2 className="text-lg md:text-xl font-semibold mb-2 bg-blue-900 text-white p-2">
                  Our Vision
                </h2>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg">
                  To be one of the premier technical institutions for its
                  academic excellence and innovative research to meet the future
                  needs of the society.
                </p>
                <h2 className="text-lg md:text-xl font-semibold mt-2 mb-2 bg-blue-900 text-white p-2">
                  Our Mission
                </h2>
                <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base lg:text-lg">
                  <li className="mb-2">
                    To build conducive environment for learning and creativity.
                  </li>
                  <li className="mb-2">
                    To train students to become technically competent
                    professionals and socially responsible citizens.
                  </li>
                  <li className="mb-2">
                    To develop innovative products and technologies for the
                    betterment of the society.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="doctorSection" className="w-full px-4 my-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-2.5">
            {/* Our Doctors Slider */}
            <div className="w-full md:w-1/3 px-2.5 mb-4">
              <div className="p-4 border border-gray-300 rounded-lg">
                <Slider {...doctorsSliderSettings}>
                  {doc.map((doctor, index) => (
                    <div key={index} className="director_content_container flex flex-col md:flex-row relative group">
                      <img
                        src={`${doctor.src}`} // Replace with dynamic image if available
                        alt={`Doctor ${index + 1}`}
                        className="w-full h-auto"
                      />
                      {/* Hover overlay with doctor's details */}
                      <div className="absolute bottom-0 left-0 w-full h-1/3 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white text-xl font-semibold">
                          {doctor.name} {/* Replace with dynamic data */}
                        </h4>
                        <span className="text-gray-300 text-sm">
                          {doctor.specialization} {/* Replace with dynamic data */}
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Doctor's Message Section */}
            <div className="w-full md:w-2/3 px-2.5 mb-4">
              <div className="p-4 border border-gray-300 rounded-lg">
                <h2 className="text-lg md:text-xl font-semibold mb-4 bg-blue-900 text-white p-2">
                  Message from the Doctor
                </h2>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg">
                As your healthcare providers, we want to reassure you that we are here to support you in every way possible. Whether you're dealing with physical health concerns, mental stress, or just need advice on maintaining a healthy lifestyle, please don't hesitate to reach out. Your health is not just about preventing illness, but about feeling your best every day—both physically and mentally.  
                </p>
                <h2 className="text-lg md:text-xl font-semibold mt-4 mb-4 bg-blue-900 text-white p-2">
                  Our Mission
                </h2>
                <ul className="list-disc pl-5 text-xs sm:text-sm md:text-base lg:text-lg">
                  <li className="mb-2">
                  To empower students with the knowledge and resources they need to thrive in both their studies and personal lives.
                  </li>
                  <li className="mb-2">
                  To promote healthy lifestyle choices that enhance well-being and academic performance.
                  </li>
                  <li className="mb-2">
                  To provide compassionate, confidential, and personalized care tailored to each student’s unique needs.
                  </li>
                </ul>
                <h2 className="text-lg md:text-xl font-semibold mb-4 bg-blue-900 text-white p-2">
                  About the System
                </h2>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg">
                The system efficiently manages data for students, employees, and their dependents with secure validation and record-keeping. It tracks patient details, monitors medicine inventory, and manages the distribution process. By centralizing information, it ensures accurate data handling, improves operational efficiency, and enhances security. The system streamlines tasks such as tracking dependents, validating records, and maintaining an up-to-date inventory for effective healthcare and resource management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
