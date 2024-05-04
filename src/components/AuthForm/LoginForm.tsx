"use client";

import { useLoginMutation } from "@/redux/slices/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ILoginUser } from "@/types/AuthFormData";
import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import ErrorMesage from "../ErrorMesage/ErrorMesage";
import { saveTokenStorage } from "@/utils/setTokens";
import { setCredentials } from "@/redux/slices/auth/authSlice";

const basicSchema = yup.object().shape({
  email: yup.string().required("*required").email("*invalid format"),
  password: yup.string().required("*required"),
});

export function LoginForm() {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
  } = useFormik<ILoginUser>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values: ILoginUser) => {
      try {
        const userData = await login(values).unwrap();
        saveTokenStorage({ ...userData });
        dispatch(setCredentials({ ...userData }));
        router.push("/");
      } catch (error: any) {
        setErrMsg(error.data?.message);
      }
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="relative">
        <input
          id="email"
          type="email"
          placeholder="email"
          autoComplete="off"
          className={`w-full outline-none px-2 p-2 bg-transparent ${
            errors.email && touched.email
              ? "border-2 border-[#FF3333]"
              : "border-2 border-[#FAF0E6]"
          }`}
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold text-[#FAF0E6]">Required field</p>
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
              : "border-2 border-[#FAF0E6]"
          }`}
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
        />
        <div className="flex items-center gap-2">
          <p className="text-[#FF3333] text-xl">*</p>
          <p className="font-bold text-[#FAF0E6]">Required field</p>
        </div>

        {errors.password && touched.password && (
          <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
            {errors.password}
          </span>
        )}
      </div>

      <ErrorMesage error={errMsg} />

      <button
        type="submit"
        className="w-full mt-8 text-lg bg-[#FAF0E6] text-[#001a2c] p-2 transition-all duration-200 cursor-pointer font-bold hover:shadow-buttonMainBrick"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
      <div className="flex items-center justify-center">
        <Link
          href="/register"
          className="text-lg font-bold transition-all duration-200 underline hover:scale-110"
        >
          JOIN THE PORTAL
        </Link>
      </div>
    </form>
  );
}
