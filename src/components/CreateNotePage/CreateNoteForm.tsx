"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import { useCreateNoteMutation } from "@/redux/slices/notes/notesApislice";

const Editor = dynamic(() => import("@/components/EditorJs/EditorComponent"), {
  ssr: false,
});

const CreateNoteForm = () => {
  const [createNote, { isLoading }] = useCreateNoteMutation();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [data, setData] = useState<OutputData>();

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
      const note = {
        title,
        data,
        tags,
      };

      console.log(note);
      
      await createNote(note).unwrap();
      router.push("/notes");
    } catch (error) {
      console.error(error);
    }
  };
  return (
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

      <button
        onClick={handleSubmit}
        className="bg-[#FAF0E6] ml-auto text-black transition-all duration-200 px-4 py-1 font-bold hover:shadow-buttonMainBrick"
      >
        POST
      </button>
    </div>
  );
};

export default CreateNoteForm;
