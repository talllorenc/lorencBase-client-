"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ILoginUser } from "@/types/AuthFormData";
import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import { useLazyProfileQuery, useLoginMutation } from "@/services/user.service";
import ErrorMesage from "../ErrorMesage/ErrorMesage";

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  password: yup.string().required("*required"),
});

export function LoginForm() {
  const router = useRouter();

  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState("");
  const [triggerCurrentUser] = useLazyProfileQuery();

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
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values: ILoginUser) => {
      try {
        await login(values).unwrap();
        router.push("/");
      } catch (error: any) {
        setError(error.data.error);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="relative">
        <input
          id="email"
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
          id="password"
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
          <p className="font-bold">Required field</p>
        </div>

        {errors.password && touched.password && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.password}
          </span>
        )}
      </div>

      <ErrorMesage error={error} />

      <button
        type="submit"
        className="w-full  shadow-button text-lg bg-white text-black p-2 transition-all duration-200 cursor-pointer font-bold hover:bg-[#21232c] hover:text-white"
      >
        Enter
      </button>
      <div className="flex items-center justify-center">
        <Link
          href="/register"
          className="text-lg font-bold transition-all duration-200 underline hover:text-white"
        >
          JOIN THE PORTAL
        </Link>
      </div>
    </form>
  );
}
