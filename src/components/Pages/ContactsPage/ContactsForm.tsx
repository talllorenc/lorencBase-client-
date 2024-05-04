"use client";

import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { FaGithub, FaInstagram, FaGoogle } from "react-icons/fa";
import Recaptcha from "react-google-recaptcha";

const basicSchema = yup.object().shape({
  name: yup
    .string()
    .required("*required")
    .min(5, "*invalid format")
    .max(15, "*invalid format"),
  email: yup.string().required("*required").email("*invalid format"),
  message: yup.string().required("*required").max(100, "*invalid format"),
});

export function ContactsForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const {
    values,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    errors,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values, { resetForm }) => {
      setSending(true);

      const recaptchaValue = formRef.current!["g-recaptcha-response"].value;

      if (!recaptchaValue) {
        setSending(false);
        setError(false);
        setSuccess(false);
        setCaptchaError(true);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:8080/api/verify-recaptcha",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              recaptchaToken: recaptchaValue,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            emailjs
              .sendForm(
                "service_677owqj",
                "template_q1gdp1x",
                formRef.current!,
                "aKZuUw2Oseva1iRsh"
              )
              .then(
                (result) => {
                  setSending(false);
                  setError(false);
                  setSuccess(true);
                  resetForm();
                },
                (error) => {
                  setSending(false);
                  setError(true);
                  setSuccess(false);
                }
              );
          } else {
            throw new Error("reCAPTCHA verification failed");
          }
        } else {
          throw new Error("Failed to verify reCAPTCHA token");
        }
      } catch (error) {
        console.error("Error:", error);
        setSending(false);
        setError(true);
        setSuccess(false);
      }
    },
  });

  return (
    <div>
      <form
        method="POST"
        id="contactForm"
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="sm:flex justify-between gap-8">
          <div className="relative flex-1">
            <input
              id="name"
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
              <p className="font-bold">Must have more than 5 letters</p>
            </div>

            {errors.name && touched.name && (
              <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
                {errors.name}
              </span>
            )}
          </div>

          <div className="relative flex-1">
            <input
              id="email"
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
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            placeholder="message"
            className={`w-full outline-none px-2 p-2 bg-transparent h-[100px] resize-none ${
              errors.message && touched.message
                ? "border-2 border-[#FF3333]"
                : "border-2 border-[#5c5b5b]"
            }`}
            onBlur={handleBlur}
            value={values.message}
            onChange={handleChange}
          />
          <div className="flex items-center gap-2">
            <p className="text-[#FF3333] text-xl">*</p>
            <p className="font-bold">Max 100 characters</p>
          </div>

          {errors.message && touched.message && (
            <span className="absolute text-[#FF3333] top-0 right-1 p-2 font-bold">
              {errors.message}
            </span>
          )}
        </div>

        <Recaptcha
          sitekey="6LdeN78pAAAAAJvMFj_s9TH8Ze5k8c1H0XsHe2a4"
          onChange={(value) => {
            setCaptchaError(false);
          }}
        />

        <button
          type="submit"
          className={`w-full shadow-button text-lg bg-[#FAF0E6] text-black p-2 transition-all duration-200 font-bold hover:shadow-buttonMainBrick ${
            sending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={sending}
        >
          {sending ? (
            <div className="spinner-border">
              <span className=""></span>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>

      <div className="flex flex-col gap-2 mt-12 items-center">
        <p className="text-xl border-b-2 border-[#FAF0E6]">SOTIALS</p>
        <div className="text-3xl flex gap-4">
          <FaGithub className="cursor-pointer transistion-all duration-200 hover:scale-110" />
          <FaInstagram className="cursor-pointer transistion-all duration-200 hover:scale-110" />
          <FaGoogle className="cursor-pointer transistion-all duration-200 hover:scale-110" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        {captchaError ? (
          <p className="shadow-buttonRedBrick flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
            Go through the captcha, please
          </p>
        ) : null}
        {success && !sending ? (
          <p className="shadow-buttonGreenBrick flex gap-1 items-center text-green-600 dark:text-green-500 py-1 px-2 w-fit text-lg rounded-md bg-green-100 dark:bg-green-950 border border-green-600 dark:border-green-500">
            The message has been sent successfully
          </p>
        ) : null}
        {error && !sending ? (
          <p className="shadow-buttonRedBrick flex gap-1 items-center text-red-600 dark:text-red-500 py-1 px-2 w-fit text-lg rounded-md bg-red-100 dark:bg-red-950 border border-red-600 dark:border-red-500">
            The message has not been sent, please try again later
          </p>
        ) : null}
      </div>
    </div>
  );
}
