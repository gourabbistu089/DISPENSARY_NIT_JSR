import React, { useState } from "react";
import { Routes, Route, NavLink, useNavigate} from "react-router-dom";
import { FaBars, FaCross } from "react-icons/fa"; // Icon for the "3 dot" menu
import { IoMdClose } from "react-icons/io";
// import AddNewAdmin from "./AddNewAdmin";
// import AddStaffDoctor from "./AddStaffDoctor";
// import AddPatient from "./AddPatient";
// import RemoveAdminStaffDoctor from "./RemoveAdminStaffDoctor";
// import AddMedicine from "./AddMedicine";
// import PatientHistory from "./PatientHistory";
// import ViewDependent from "./ViewDependent";
// import NewAppointment from "./NewAppointment";
// import DocAppointments from "./DocAppointments";
// import ViewPatientRecord from "./ViewPatientRecord";
// import Inventory from "./Inventory";
// import PatientConsultationForm from "./PatientConsultationForm";
// import ViewPrescriptionForm from "./ViewPrescriptionForm";
// import EditPrescriptionForm from "./EditPrescriptionForm"
// import ChangePassword from "./ChangePassword";
// import ConsultedAppointments from "./ConsultedAppointments";
// import SysAuthorities from "./SysAuthorities";


// Create a Welcome component for the default route
const Welcome = () => (
  <div className="flex items-center justify-center h-full">
    <h2 className="text-3xl font-bold text-[#274187] text-center shadow-lg p-8 rounded-lg bg-gray-100">
      Welcome to NITJSR Campus Dispensary
    </h2>
  </div>
);

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <main className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-100 shadow-lg overflow-y-auto transform lg:translate-x-0 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "lg:w-64 sm:w-64 translate-x-0" : "w-0 -translate-x-full"
        } lg:w-64`}
      >

        <div className={`p-4 ${sidebarOpen ? "block" : "hidden"} md:block`}>
          <h2 
          onClick={() => setSidebarOpen(false)}
          className="text-base font-bold mb-4 text-[#274187]  flex items-center justify-between">
            <span>Admin Panel</span>
           {sidebarOpen &&  <IoMdClose size={24}/>}
          </h2>
          <ul className="font-semibold">
            <li className="mb-2">
              <NavLink
                to="add-new-admin"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Add New Admin
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="add-staff-doctor"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Add Staff/Doctor
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="add-new-patient"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Add New Patient
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="add-medicine"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Add Medicine to Inventory
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="remove-admin-staff-doctor"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Remove Admin/Staff
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="SysAuthorities"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
              SysAuthorities
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="new-appointment"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                New Appointment
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="view-patient-record"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                View Patient Records
              </NavLink>
            </li>
            
            <li className="mb-2">
              <NavLink
                to="doc-appointments"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Doctor Appointments
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="consulted-appointments"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Consulted Appointments
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="inventory"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                View Inventory
              </NavLink>
            </li>
            
            <li className="mb-2">
              <NavLink
                to="Patient-history"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
               View Patients History
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="view-dependent"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
               View All Employees/ Dependents
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="change-password"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 text-base px-4 rounded-lg bg-gray-200"
                    : "block py-2 text-base px-4 rounded-lg hover:bg-gray-200"
                }
                onClick={() => setSidebarOpen(false)}
              >
                Change Password
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <section
        className={`flex-1 p-4 overflow-y-auto transition-all duration-300  ease-in-out ${
          sidebarOpen ? " blur-lg " : "ml-0"
        } lg:ml-18`}
      >
        {/* 3 Dot Menu for Mobile */}
        <button
        className="lg:hidden text-gray-600 mb-4 focus:outline-none transform transition-transform duration-300 ease-in-out "
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          transform: sidebarOpen ? 'rotate(45deg) translateY(5px)' : 'rotate(0deg)',
        }}
      >
        <FaBars size={24} />
      </button>
      
 
       <div className="" onClick={() => setSidebarOpen(false)}>
       <Routes>
          <Route path="/" element={<Welcome />} /> 
          {/* <Route path="add-new-admin" element={<AddNewAdmin />} />
          <Route path="add-new-patient" element={<AddPatient />} />
          <Route path="add-medicine" element={<AddMedicine />} />
          <Route
            path="remove-admin-staff-doctor"
            element={<RemoveAdminStaffDoctor />}
          />
          <Route
            path="SysAuthorities"
            element={<SysAuthorities />}
          />
          <Route path="inventory" element={<Inventory />} />
          <Route path="new-appointment" element={<NewAppointment />} />
          <Route path="view-patient-record" element={<ViewPatientRecord />} />
          <Route
            path="view-prescription-form"
            element={<ViewPrescriptionForm />}
          />
          <Route
          path="prescription-edit-form"
          element={<EditPrescriptionForm/>}
          />

          <Route path="add-staff-doctor" element={<AddStaffDoctor />} />
          <Route path="doc-appointments" element={<DocAppointments />} />
          <Route
            path="consulted-appointments"
            element={<ConsultedAppointments />}
          />
          <Route path="patient-history" element={<PatientHistory />} />
          <Route path="view-dependent" element={<ViewDependent />} />
          <Route
            path="patient-consultation-form"
            element={<PatientConsultationForm />}
          />
          <Route path="change-password" element={<ChangePassword />} /> */}
        </Routes>
       </div>
      </section>
    </main>
  );
};

export default Admin;
