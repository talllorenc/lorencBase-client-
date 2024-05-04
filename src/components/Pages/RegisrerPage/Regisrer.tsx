"use client";

import RegisterForm from "../../AuthForm/RegisterForm";
import PopupRegister from "../../PopupRegister/PopupRegister";
import { useEffect, useState } from "react";

const Register = () => {
  const [showPopupRegister, setShowPopupRegister] = useState(false);

  useEffect(() => {
    const popupRegister = window.localStorage.getItem("isClosePopupRegister");
    if (!popupRegister) {
      setShowPopupRegister(true);
    }
  }, []);

  const closePopupRegister = () => {
    localStorage.setItem('isClosePopupRegister', 'true');
    setShowPopupRegister(false);
  };

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">NEW ACCOUNT</h1>
        <div className="mt-8 max-w-2xl mx-auto">
          <RegisterForm />
        </div>
      </div>
      {showPopupRegister && <PopupRegister closePopupRegister={closePopupRegister}/>}
    </div>
  );
};
export default Register;
