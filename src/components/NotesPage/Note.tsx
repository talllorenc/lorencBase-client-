import { INoteData } from "@/types/NotesData";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { FaEye } from "react-icons/fa";

type PropsType = {
  note: INoteData;
};

const Note = ({ note }: PropsType) => {
  const createDate = formatDate(note.createdAt);

  return (
    <Link href={`/notes/${note.slug}`} className="w-full">
      <div className="shadow-buttonMain rounded transition-all duration-200 cursor-pointer hover:shadow-buttonMainBrick flex flex-col gap-1  p-2">
        
        <div className="flex flex-col">
          <h2 className="font-bold text-lg">{note.title}</h2>
          <span>{note.description}</span>
        </div>

        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            <FaEye />
            <p>{note.viewsCount}</p>

            <ul className="flex text-xs text-black ml-2 gap-2">
              {note.tags.map((tag) => (
                <li
                  key={tag}
                  className="border text-blue-500 rounded px-1 bg-[#F8F4FF]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-xs text-green-500 font-medium">create</p>
            <p className="text-[#9c9b9b] font-medium">{createDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Note;
