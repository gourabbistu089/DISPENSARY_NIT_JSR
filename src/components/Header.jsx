import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaBell } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isNotificationbarOpen, setIsNotificationbarOpen] = useState(false);
    const [expiringSoon, setExpiringSoon] = useState([]);
  const dropdownRef = useRef(null);
  const dashboardRef = useRef(null);

  const handleLogout = async () => {
    await logout(); // Ensure the async logout request completes
    // localStorage.removeItem('user'); // Clean up user data
    navigate("/login"); // Redirect to login page
  };

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)
    &&  !dashboardRef.current.contains(event.target)) {
      toggleDropdown();
    }
  };

  const handleInventory = async (e) => {

    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, '');
      const response = await axios.get(`${baseURL}/api/staff/getstock`,
        {
          withCredentials: true,
        });

      if (response.status === 200) {
        const expiringSoonData = response.data.expiringSoon;
        if (expiringSoonData) {
          setExpiringSoon(expiringSoonData);
        }
      } else {
        console.error("Failed to fetch medicines");
      }
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  useEffect(()=>{
    handleInventory();
  },[])


  return (
    <header  className="w-full bg-white p-2 sm:p-3 md:p-4 z-10 lg:sticky lg:top-0 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0 ml-2 transition-transform duration-300 ease-in-out hover:scale-110" >
          <Link to="/">
            <img
              src="/svg.png"
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-16"
            />
          </Link>
        </div>
        <div className="text-center flex-grow ml-12">
          <h2 className="text-[#274187] text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
            राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
          </h2>
          <h1 className="text-[#274187] text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
            National Institute of Technology Jamshedpur
          </h1>
        </div>
        <nav className="flex-shrink-0">
          <ul  className="flex gap-4 sm:gap-5 md:gap-6 list-none m-0 p-0 text-[#274187] items-center">
            {isAuthenticated ? (
              <>
                {user.userType === "admin" && (
                  <li  className="transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link
                      to="/admin"
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                {user.userType === "doctor" && (
                  <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link
                      to="/doctor"
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                {user.userType === "staff" && (
                  <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link
                      to="/staff"
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

              <li  className="relative cursor-pointer p-1"  onClick={()=>{setIsNotificationbarOpen(!isNotificationbarOpen)}}>
                <FaBell className="h-4 sm:h-5 md:h-6 lg:h-7 w-5 "/>
                {expiringSoon.length > 0 && (
                  <span className="absolute top-[-6px] right-[-6px] bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {expiringSoon.length}
                  </span>
                )}
              </li>

                <li  className="relative">
      <img ref={dashboardRef}
        src="/icon.png"
        alt="User"
        className="h-5 sm:h-6 md:h-8 lg:h-10 w-5 sm:w-6 md:w-8 lg:w-10 rounded-full cursor-pointer"
        onClick={toggleDropdown}
      />
      {dropdownVisible && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 w-32 sm:w-36 md:w-40 lg:w-48 bg-white text-black rounded-md shadow-lg z-10">
          <div className="px-4 py-2 border-b border-gray-200">
            <span className="block text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg text-gray-600">
              {user?.userType?.charAt(0)?.toUpperCase() +
                user?.userType?.slice(1)?.toLowerCase()}
            </span>
            <span className="block text-sm text-gray-600">
              {user.userId}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="block w-full text-left text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg px-4 py-2 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </li>

              </>
            ) : (
              <>
                <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                  <Link
                    to="/"
                    className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                  >
                    Home
                  </Link>
                </li>
                {location.pathname !== "/login" && (
                  <li className="transition-transform duration-300 ease-in-out hover:scale-110">
                    <Link
                      to="/login"
                      className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </>
            )}
          </ul>
        </nav>
      </div>


      {isNotificationbarOpen && (
        <div
          onClick={()=>{setIsNotificationbarOpen(false)}}
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
        ></div>
      )} 

  <div  className={`fixed top-0 p-5 right-0 h-full w-[25vw] max-w-[400px] overflow-y-scroll min-w-[300px] bg-zinc-100 z-50 transform ${
      isNotificationbarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}>
        
        <div className="w-full h-10 mb-5 flex items-center justify-between">
            <p className="text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg font-semibold">Notifications</p>
            <button>
            <RxCross2 className="w-4 h-4 font-extrabold" onClick={()=>{setIsNotificationbarOpen(false)}}/>
            </button>
        </div>
        {expiringSoon.length > 0 && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-600 p-2 text-xs sm:text-sm md:text-sm lg:text-lg xl:text-lg mb-4">
        <p className="font-bold">Alert: Expiring Medicines</p>
        <ul className="list-disc ml-5">
        {expiringSoon.map((medicine, index) => (
    <li
      key={index}
      className=" p-2 rounded-md mb-1 shadow-sm bg-amber-100"
    >
      <span className="font-medium text-gray-800">{medicine.M_name}</span> - 
      <span className="text-gray-600"> Batch: {medicine.batch_no}</span>
      <span className="block text-sm text-gray-500">
        Expiring on <span className="font-normal text-gray-600">{medicine.closestExpiryDate}</span>
      </span>
    </li>
  ))}
  </ul>
</div>
)}
        
      </div>
    </header>
  );
};

export default Header;