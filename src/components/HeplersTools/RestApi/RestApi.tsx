import JsonHl from "./JsonHl";
import { useState, ChangeEvent, FormEvent } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const basicSchema = yup.object().shape({
  method: yup.string().required("*required"),
  url: yup.string().required("*required"),
});

const RestApi = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      method: "GET",
      url: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(values.url, {
          method: values.method,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setResponse(JSON.stringify(data));
        setError("");
      } catch (error: any) {
        setError("): Error 404 :(");
      }
    },
  });

  return (
    <div className="shadow-buttonMainBrick rounded-lg p-4 bg-[#FAF0E6] text-[#001a2c]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-full gap-4 md:gap-0"
      >
        <div className="flex w-full">
          <select
            id="method"
            name="method"
            value={values.method}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-t-2 border-l-2 border-b-2 border-[#001a2c] p-2 bg-transparent"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
          <input
            id="url"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your API url"
            className={`w-full outline-none px-2 p-2 bg-transparent text-[#001a2c] border-2 border-[#001a2c] font-bold ${
              errors.url && "border-2 border-[#FF3333]"
            }`}
          />
        </div>

        <button
          className="text-lg bg-[#001a2c] text-[#FAF0E6] py-2 px-8 transition-all duration-200 cursor-pointer font-bold hover:shadow-buttonMainDarkBrick"
          type="submit"
        >
          SEND
        </button>
      </form>

      {error ? (
        <p className="text-red-500 mt-4 font-bold">{error}</p>
      ) : (
        <div className="mt-8">
          <JsonHl code={response} />
        </div>
      )}
    </div>
  );
};

export default RestApi;
