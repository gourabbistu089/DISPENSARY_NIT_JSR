import React, { useState } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword.jsx";

const LoginPage = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <main className="font-medium p-4 mt-5 mb-5">
      {forgotPassword ? (
        <ForgotPassword setForgotPassword={setForgotPassword} />
      ) : (
        <Login setForgotPassword={setForgotPassword} />
      )}
    </main>
  );
};

export default LoginPage;
