"use client";

import Note from "./Note";
import HPNote from "@/components/HomePage/HPNote/HPNote";
import { useGetAllQuery } from "@/redux/slices/notes/notesApislice";
import SkeletonNotes from "../../SkeletonLoading/SkeletonNotes";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ErrorMesage from "../../ErrorMesage/ErrorMesage";
import { INoteData } from "@/types/NotesData";
import { usePathname } from "next/navigation";
import MainFilter from "@/components/FilterNotes/MainFilter";
import { SetStateAction, useState } from "react";

interface INoteList {
  noteComponent: string;
}

const NotesList = ({ noteComponent }: INoteList) => {
  const [filter, setFilter] = useState({});
  const { data: notes, isLoading, isError, isSuccess } = useGetAllQuery(filter);
  const pathname = usePathname();

  const NoteComponent = noteComponent === "HPNote" ? HPNote : Note;

  const handleFilter = (value: object) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ...value,
    }));
  };

  console.log(filter);
  

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      {pathname !== "/" && (
        <h1 className="text-center text-6xl font-bold">NOTES</h1>
      )}
      {pathname !== "/" && <Breadcrumbs />}
      <div className="mt-8">
        <MainFilter handleFilter={handleFilter} setFilter={setFilter}/>

        {isLoading ? (
          [...Array(3)].map((_, index) => <SkeletonNotes key={index} />)
        ) : (
          <div>
            {isError ? (
              <ErrorMesage error="Notes not found" />
            ) : (
              isSuccess && (
                <div className="flex flex-col gap-8">
                  {NoteComponent &&
                    notes.map((note: INoteData) => (
                      <NoteComponent key={note._id} note={note} />
                    ))}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
