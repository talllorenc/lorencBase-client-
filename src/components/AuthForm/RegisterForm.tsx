"use client";

import { useRouter } from "next/navigation";
import { IRegisterUser } from "@/types/AuthFormData";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import ErrorMesage from "../ErrorMesage/ErrorMesage";

const loginRules = /^[A-Za-z0-9]+$/;
const passwordRules = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/;

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  name: yup
    .string()
    .required("*required")
    .min(5, "*invalid format")
    .matches(loginRules, { message: "*invalid format" }),
  password: yup
    .string()
    .min(6, "*invalid format")
    .matches(passwordRules, {
      message: "*invalid format",
    })
    .required("*required field"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "*passwords don't match")
    .required("*required field"),
});

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values: IRegisterUser) => {
      try {
        console.log("register");
        
        router.push("/login");
      } catch (error: any) {
        setError(error.data.error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="relative">
        <input
          name="email"
          type="email"
          placeholder="email"
          autoComplete="off"
          className={`w-full outline-none px-2 p-2 bg-transparent ${
            errors.email && touched.email
              ? "border-2 border-[#FF3333]"
              : "border-2 border-[#5c5b5b]"
          }`}
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold">Required field</p>
        </div>

        {errors.email && touched.email && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.email}
          </span>
        )}
      </div>

      <div className="relative">
        <input
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
          className={`w-full outline-none px-2 p-2 bg-transparent ${
            errors.name && touched.name
              ? "border-2 border-[#FF3333]"
              : "border-2 border-[#5c5b5b]"
          }`}
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold">
            Must have more than 5 letters
          </p>
        </div>

        {errors.name && touched.name && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.name}
          </span>
        )}
      </div>

      <div className="relative">
        <input
          name="password"
          type="password"
          placeholder="password"
          className={`w-full outline-none px-2 p-2 bg-transparent ${
            errors.password && touched.password
              ? "border-2 border-[#FF3333]"
              : "border-2 border-[#5c5b5b]"
          }`}
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold">
            More than 6 characters, 1 uppercase letter, 1 special character
          </p>
        </div>

        {errors.password && touched.password && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.password}
          </span>
        )}
      </div>

      <div className="relative">
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirm password"
          className={`w-full outline-none px-2 p-2 bg-transparent ${
            errors.confirmPassword && touched.confirmPassword
              ? "border-2 border-[#FF3333]"
              : "border-2 border-[#5c5b5b]"
          }`}
          onBlur={handleBlur}
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold">Required field</p>
        </div>

        {errors.confirmPassword && touched.confirmPassword && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.confirmPassword}
          </span>
        )}
      </div>

      <ErrorMesage error={error}/>

      <button
        type="submit"
        className="w-full  shadow-button text-lg bg-[#FAF0E6] text-black p-2 transition-all duration-200 cursor-pointer font-bold hover:shadow-buttonMainBrick"
      >
        JOIN
      </button>
    </form>
  );
};

export default RegisterForm;
