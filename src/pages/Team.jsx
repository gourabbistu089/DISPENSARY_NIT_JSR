import React, { useState, useEffect } from "react";

const APIURL = "https://api.github.com/users/";
const placeholderImage = "placeholder.png"; // Replace with your placeholder image path or URL

const Team = () => {
  const [usersData, setUsersData] = useState({});
  const [loading, setLoading] = useState(true);
  const usernames = ["sachinkumar911", "Vipin4597", "abhay5624", "gourabbistu089"]; // Add more GitHub usernames here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPromises = usernames.map((username) =>
          fetch(APIURL + username).then((response) => response.json())
        );
        const results = await Promise.all(dataPromises);
        const dataMap = {};
        results.forEach((data) => {
          dataMap[data.login] = data;
        });
        setUsersData(dataMap);
      } catch (error) {
        console.error("Error fetching the user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section id="authority">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 md:text-xl py-px mb-4 text-xs font-semibold tracking-wider text-[#274187] uppercase rounded-full bg-teal-accent-400">
              Discover Our Authorities
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
              Meet with Our <b> Prof.-In-Charge </b> of
              "Dispensary_Management_System"
            </p>
          </div>
          <div className="flex justify-center items-center mx-auto sm:max-w-sm lg:max-w-md">
            <div>
              <div className="relative w-64 h-66 mb-4 rounded shadow overflow-hidden">
                <img
                  className="object-cover w-full h-full rounded transition-all hover:scale-110"
                  src="duttaSir.jpeg"
                  alt="Dr Subrata Dutta"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">Dr Subrata Dutta</p>
                <p className="mb-5 text-xs text-gray-800">
                  Assistant Professor
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="https://nitjsr.irins.org/profile/98464"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25   "
                      height="25"
                      fill="#000000"
                      className="bi bi-person-fill max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="devlopers">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 md:text-xl py-px mb-4 text-xs font-semibold tracking-wider text-[#274187] uppercase rounded-full bg-teal-accent-400">
              Discover Our Developers
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
              Meet with Frontend and Backend Developers of
              "Dispensary_Management_System"
            </p>
          </div>
          <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
                <img
                  className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                  src="vinay.jpeg"
                  alt="Vinay Gupta"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-md font-bold">Vinay Gupta</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Web Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                <a
                href="mailto:vinaygupta.nitjsr@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src="mail.png"
                  alt="mail"
                  className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                />
              </a>
                  <a
                    href="https://www.linkedin.com/in/vinaygupta-nitjsr/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="li.svg"
                      alt="LinkedIn"
                      className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://github.com/vinaytheprogrammer"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="github.svg"
                      alt="GitHub"
                      className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
                <img
                  className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                  src="anshul.jfif"
                  alt="Anshul Namdev"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-md font-bold">Anshul Namdev</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                <a
                href="mailto:anshulnamdev28@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src="mail.png"
                  alt="mail"
                  className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                />
              </a>
                  <a
                    href="https://www.linkedin.com/in/anshul-namdev-a3a2aa247/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="li.svg"
                      alt="LinkedIn"
                      className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://github.com/Anshuln28"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="github.svg"
                      alt="GitHub"
                      className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
                <img
                  className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                  src={usersData.sachinkumar911?.avatar_url || placeholderImage}
                  alt={`${
                    usersData.sachinkumar911?.login || "Sachin Kumar"
                  }'s avatar`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-md font-bold">Sachin Kumar</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="mailto:sachinkumarmehta91@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="mail.png"
                      alt="mail"
                      className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sachin-kumar-mehta/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="li.svg"
                      alt="LinkedIn"
                      className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://github.com/sachinkumar911"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="github.svg"
                      alt="GitHub"
                      className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64 overflow-hidden">
                <img
                  className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                  src={usersData.Vipin4597?.avatar_url || placeholderImage}
                  alt={`${usersData.Vipin4597?.login || "Vipin Pal"}'s avatar`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-md font-bold">Vipin Pal</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="mailto:vipin4597@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="mail.png"
                      alt="mail"
                      className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vipin-pal-030819196/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="li.svg"
                      alt="LinkedIn"
                      className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                  <a
                    href="https://github.com/Vipin4597"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <img
                      src="github.svg"
                      alt="GitHub"
                      className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="maintainers">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 md:text-xl py-px mb-4 text-xs font-semibold tracking-wider text-[#274187] uppercase rounded-full bg-teal-accent-400">
            Discover Our Maintainers
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
            Meet with Frontend and Backend Mantainers of
            "Dispensary_Management_System"
          </p>
        </div>
        {/* Set grid-cols-5 for large screens and reduce their size */}
        <div className="grid gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg">
          {/* Maintain individual divs for each maintainer */}
          <div>
            <div className="relative pb-48 mb-4 rounded shadow lg:pb-56 overflow-hidden">
              <img
                className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                src="abhishek.jpg"
                alt="Abhishek"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            </div>

            <div className="flex flex-col sm:text-center">
              <p className="text-md font-bold">Abhishek Patel</p>
              <p className="mb-5 text-xs text-gray-800">
                Full Stack Web Developer
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="mailto:itsabhishekpatel01@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="mail.png"
                    alt="mail"
                    className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/itsabhishekpatel01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="li.svg"
                    alt="LinkedIn"
                    className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://github.com/itsAbhishekpatel01"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="github.svg"
                    alt="GitHub"
                    className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
              </div>
            </div>


          </div>

          {/* Other maintainers follow the same structure */}
          <div>
            <div className="relative pb-48 mb-4 rounded shadow lg:pb-56 overflow-hidden">
              <img
                className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                src="sukriti.jpg"
                alt="Sukriti"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-md font-bold">Sukriti</p>
              <p className="mb-5 text-xs text-gray-800">
                Full Stack Developer
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="mailto:2023pgcsca017@nitjsr.ac.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="mail.png"
                    alt="mail"
                    className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sukriti-rai-a58925287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="li.svg"
                    alt="LinkedIn"
                    className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://github.com/Sukriti-Rai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="github.svg"
                    alt="GitHub"
                    className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative pb-48 mb-4 rounded shadow lg:pb-56 overflow-hidden">
              <img
                className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                src={usersData.abhay5624?.avatar_url || placeholderImage}
                      alt={`${
                        usersData.abhay5624?.login || "Abhay Kumar"
                      }'s avatar`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholderImage;
                      }}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-md font-bold">Abhay Kumar Sharma</p>
              <p className="mb-5 text-xs text-gray-800">
                Full Stack Developer
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="mailto:abhaysharma7435@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="mail.png"
                    alt="mail"
                    className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhay74/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="li.svg"
                    alt="LinkedIn"
                    className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://github.com/abhay5624"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="github.svg"
                    alt="GitHub"
                    className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative pb-48 mb-4 rounded shadow lg:pb-56 overflow-hidden">
              <img
                className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                src="Priyanshu.jpg"
                alt="Priyanshu kumar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-md font-bold">Priyanshu kumar</p>
              <p className="mb-5 text-xs text-gray-800">
                Full Stack Developer
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="mailto:dlnpriyanshu@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="mail.png"
                    alt="mail"
                    className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/priyanshu-kumar-143995246/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="li.svg"
                    alt="LinkedIn"
                    className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://github.com/Priyanshu-kr-gupta"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="github.svg"
                    alt="GitHub"
                    className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Add Gaurav herer similarly... */}
          
          <div>
            <div className="relative pb-48 mb-4 rounded shadow lg:pb-56 overflow-hidden">
              <img
                className="absolute object-cover w-full h-full rounded transition-all hover:scale-110"
                src={usersData.gourabbistu089?.avatar_url || placeholderImage}
                      alt={`${
                        usersData.gourabbistu089?.login || "Gourab"
                      }'s avatar`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholderImage;
                      }}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-md font-bold">Gourab</p>
              <p className="mb-5 text-xs text-gray-800">
                Full Stack Developer
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="mailto:gourabbistu2002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="mail.png"
                    alt="mail"
                    className="max-h-9 max-w-9 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/gourabbistu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="li.svg"
                    alt="LinkedIn"
                    className="max-h-7 max-w-7 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
                <a
                  href="https://github.com/gourabbistu089"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <img
                    src="github.svg"
                    alt="GitHub"
                    className="max-h-8 max-w-8 transition-transform duration-300 ease-in-out hover:scale-150"
                  />
                </a>
              </div>
            </div>
          </div>
    </div>
  </div>
      </section>

    </>
  );
};

export default Team;
