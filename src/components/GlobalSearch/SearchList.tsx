"use client";

import { useSearchNoteQuery } from "@/redux/slices/notes/notesApislice";
import Link from "next/link";
import { INoteData } from "@/types/NotesData";
import { formatDate } from "@/utils/formatDate";
import {FaEye} from "react-icons/fa"

interface SearchListProps {
  searchTerm: string;
}

const SearchList = ({ searchTerm }: SearchListProps) => {
  const {
    data: searchNote,
    isSuccess,
    isLoading,
  } = useSearchNoteQuery({
    query: searchTerm,
  });

  return (
    <div>
      {isSuccess && (
        <div className="flex flex-col gap-4">
          {searchNote.map((note: INoteData) => (
            <Link
              href={`/notes/${note.slug}`}
              key={note._id}
              className="flex justify-between p-2 shadow-buttonMain transition-all duration-200 hover:shadow-buttonMainBrick"
            >
              <div>
                <p className="text-xl font-bold">{note.title}</p>
                <p className="text-[#9c9b9b]">{note.description}</p>
              </div>

              <div>
                <div className="flex items-center gap-1 justify-end">
                  <FaEye />
                  <p>{note.viewsCount}</p>
                </div>
                <p className="text-green-500 ">{formatDate(note.createdAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchList;
