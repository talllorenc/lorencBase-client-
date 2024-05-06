"use client";

import Note from "./Note";
import HPNote from "@/components/HomePage/HPNote/HPNote";
import { useGetAllQuery } from "@/redux/slices/notes/notesApislice";
import SkeletonNotes from "../../SkeletonLoading/SkeletonNotes";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import ErrorMesage from "../../ErrorMesage/ErrorMesage";
import { INoteData } from "@/types/NotesData";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PagesPagination from "@/components/Pagination/PagesPagination";
import LoadMore from "@/components/Pagination/LoadMore";

interface INoteList {
  noteComponent: string;
}

const NotesList = ({ noteComponent }: INoteList) => {
  const searchParams = useSearchParams().get("page");
  const [page, setPage] = useState(searchParams ? parseInt(searchParams) : 1);
  const perPage = 2;

  const { data, isLoading, isError, isSuccess } =  useGetAllQuery({
    page: page,
    perPage: perPage,
  });
  const [notes, setNotes] = useState([]);

  
  const pathname = usePathname();
  const NoteComponent = noteComponent === "HPNote" ? HPNote : Note;

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      {pathname !== "/" && (
        <h1 className="text-center text-6xl font-bold">NOTES</h1>
      )}
      {pathname !== "/" && <Breadcrumbs />}
      <div className="mt-8">
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
                    data.notes.map((note: INoteData) => (
                      <NoteComponent key={note._id} note={note} />
                    ))}
                </div>
              )
            )}

            {/* <PagesPagination data={data} perPage={perPage} page={page} setPage={setPage}/> */}
            <LoadMore data={data} perPage={perPage} page={page} setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
