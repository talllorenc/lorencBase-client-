"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";

const Editor = dynamic(() => import("@/components/EditorJs/EditorComponent"), {
  ssr: false,
});

const CreateNote = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [data, setData] = useState<OutputData>();
  const [errors, setErrors] = useState<string[]>([]);

  const handleDataChange = (newData: OutputData) => {
    setData(newData);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTagsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const tags = tagsInput.split(",").map((tag) => tag.trim());
      const response = await fetch("http://localhost:8080/api/notes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, data, tags }),
      });

      if (response.ok) {
        router.push("/");
        console.log("create");
      } else {
        const responseData = await response.json();
        const errorMessages = responseData.message || [];
        const formattedErrors = errorMessages.map(
          (error: {
            type: string;
            value: string;
            msg: string;
            path: string;
            location: string;
          }) => error.msg
        );
        setErrors(formattedErrors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">CREATE NOTE</h1>
        <div className="mt-8 mx-auto flex flex-col gap-8">
          <div className="relative">
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
              className="border-2 border-[#FAF0E6] w-full outline-none px-2 p-2 bg-transparent"
            />
            <div className="flex items-center gap-2">
              <p className="text-[#FF3333] text-xl">*</p>
              <p className="font-bold">Required field</p>
            </div>
          </div>

          <Editor
            data={data}
            onChange={handleDataChange}
            holder="editor-container"
          />
          <div className="relative">
            <input
              type="text"
              value={tagsInput}
              onChange={handleTagsInputChange}
              placeholder="Tags (comma separated)"
              className="border-2 border-[#FAF0E6] w-full outline-none px-2 p-2 bg-transparent"
            />
          </div>

          
          {errors.length > 0 && (
            <div className="mt-4">
              <ul className="text-[#FF3333] p-2 font-bold">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="bg-[#FAF0E6] ml-auto text-black transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
          >
            POST
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateNote;
