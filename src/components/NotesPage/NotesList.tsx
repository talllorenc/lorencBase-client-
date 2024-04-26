"use client";

import Note from "./Note";
import { useGetAllQuery } from "@/redux/slices/notes/notesApislice";
import { INoteData } from "@/types/NotesData";
import SkeletonNotes from "../SkeletonLoading/SkeletonNotes";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ErrorMesage from "../ErrorMesage/ErrorMesage";
import { useState } from "react";
const NotesList = () => {
  const { data: notes, isLoading, isError, isSuccess } = useGetAllQuery("");

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <h1 className="text-center text-6xl font-bold">NOTES</h1>
      <Breadcrumbs />
      <div className="mt-8">
        {isLoading ? (
          [...Array(3)].map((_, index) => <SkeletonNotes key={index} />)
        ) : (
          <div>
            {isError ? (
              <ErrorMesage error="Notes not found"/>
            ) : (
              isSuccess && (
                <div className="flex flex-col gap-4">
                  {notes.map((note: INoteData) => (
                    <Note key={note._id} note={note} />
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
