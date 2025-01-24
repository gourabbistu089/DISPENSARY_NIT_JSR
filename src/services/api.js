const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/+$/, ""); // Remove trailing slash

export const authEndpoints = {
    REGISTER_PATIENT: `${BASE_URL}/api/auth/registerPatient`,
    REGISTER_ADMIN: `${BASE_URL}/api/auth/registerAdmin`,
    REGISTER_STAFF_AND_DOCTOR: `${BASE_URL}/api/auth/registerStaffandDoctor`,
    LOGIN_API: `${BASE_URL}/api/auth/login`,
    LOGOUT_API: `${BASE_URL}/api/auth/logout`,
    CHANGE_PASSWORD_API: `${BASE_URL}/api/auth/change-password`,
    USER_DETAILS_API: `${BASE_URL}/api/auth/user-details`,
    SEND_OTP_PHONE_API: `${BASE_URL}/api/auth/send-otp-phoneno`,
    VERIFY_OTP_API: `${BASE_URL}/api/auth/verify-otp`,
    SEND_OTP_EMAIL_API: `${BASE_URL}/api/auth/send-otp-email`,
    RESET_PASSWORD_API: `${BASE_URL}/api/auth/reset-pass`,
};

export const dependentEndpoints = {
    ADD_DEPENDENT: `${BASE_URL}/api/user/:user_id/dependents`,
    GET_EMPLOYEES_WITH_DEPENDENTS: `${BASE_URL}/api/employees`,
};

export const doctorEndpoints = {
    GET_DOCTOR_QUEUE: `${BASE_URL}/api/doc/queue`,
    UPDATE_PRESCRIPTION: `${BASE_URL}/api/doc/prescription/update`,
    DELETE_PRESCRIPTION: `${BASE_URL}/api/doc/prescription/delete/:id`,
    GET_COMPLETED_PRESCRIPTIONS: `${BASE_URL}/api/doc/doctor/completed-prescriptions`,
    GET_TODAY_COMPLETED_PRESCRIPTIONS: `${BASE_URL}/api/doc/doctor/today-completed-prescriptions`,
    ADD_MEDICINE_TO_PRESCRIPTION: `${BASE_URL}/api/doc/prescription/:prescription_id/add-medicine`,
    REMOVE_MEDICINE_FROM_PRESCRIPTION: `${BASE_URL}/api/doc/prescription/:prescription_id/remove-medicine`,
    EDIT_MEDICINE_IN_PRESCRIPTION: `${BASE_URL}/api/doc/prescription/:prescription_id/edit-medicine`,
};

// export const prescriptionEndpoints = {
//     CREATE_PRESCRIPTION: `${BASE_URL}/api/prescription`,
//     VIEW_PRESCRIPTION_LIST: `${BASE_URL}/api/viewPrescriptionList`,
//     VIEW_PRESCRIPTION_BY_ID: `${BASE_URL}/api/viewPrescriptionById`,
// };

export const staffEndpoints = {
    STOCK_ENTRY: `${BASE_URL}/api/staff/stock_entry`,
    STOCK_UPDATE: `${BASE_URL}/api/staff/stock_update`,
    GET_STOCK: `${BASE_URL}/api/staff/getstock`,
    GET_INFO: `${BASE_URL}/api/staff/getinformation`,
    UPDATE_VITALS: `${BASE_URL}/api/staff/update`,
    UPDATE_HISTORY: `${BASE_URL}/api/staff/updateHistory`,
    DEPENDENT_INFO: `${BASE_URL}/api/staff/dependentinfo`,
    DEPENDENT_VITALS: `${BASE_URL}/api/staff/dependentVitals`,
    DEPENDENT_HISTORY: `${BASE_URL}/api/staff/dependentHistory`,
    PRESCRIPTION_IN_PROGRESS: `${BASE_URL}/api/staff/prescription/inproogress`,
    UPDATE_MEDICINE: `${BASE_URL}/api/staff/medicine/update`,
    SUBMIT_FORM: `${BASE_URL}/api/staff/finalsubmit`,
    GET_ALL_PRESCRIPTIONS: `${BASE_URL}/api/staff/getAllPrescriptions`,
};

export const userEndpoints = {
    UPDATE_VITALS: `${BASE_URL}/api/v1/user/:user_id/vitals`,
    CREATE_PRESCRIPTION: `${BASE_URL}/api/v1/user/prescription`,
    REMOVE_USER: `${BASE_URL}/api/v1/user/removeUser`,
    SYS_AUTHORITIES: `${BASE_URL}/api/v1/user/SysAuthorities`,
    VIEW_PRESCRIPTION_LIST: `${BASE_URL}/api/v1/user/viewPrescriptionList`,
    VIEW_PRESCRIPTION_BY_ID: `${BASE_URL}/api/v1/user/viewPrescriptionById`,
};
