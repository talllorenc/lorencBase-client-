import { INoteData } from "@/types/NotesData";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import LikesButton from "@/components/Buttons/LikesButton/LikesButton";
import DeleteNoteButton from "@/components/Buttons/DeleteNoteButton/DeleteNoteButton";

type PropsType = {
  note: INoteData;
};

const HPNote = ({ note }: PropsType) => {
  return (
    <div className="shadow-buttonMain max-w-2xl w-full mx-auto rounded transition-all duration-200 p-4 flex flex-col gap-2 hover:shadow-buttonMainBrick">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href={`/notes/${note.slug}`}
            className="font-bold text-xl mr-auto hover:underline"
          >
            {note.title}
          </Link>

          <span>{note.description}</span>
        </div>

        <div className="flex items-center gap-1 text-xl">
          <FaEye />
          <p>{note.viewsCount}</p>
        </div>
      </div>

      <p className="text-[#9c9b9b]">{formatDate(note.createdAt)}</p>

      <div className="flex items-center justify-between">
        <ul className="flex text-xs text-black gap-4">
          {note.tags.map((tag: string) => (
            <li
              key={tag}
              className="border text-blue-500 rounded px-1 bg-[#F8F4FF] cursor-pointer hover:grayscale-[80%]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <LikesButton note={note} />
      </div>
    </div>
  );
};

export default HPNote;
