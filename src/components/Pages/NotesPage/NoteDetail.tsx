"use client";

import { useGetOneBySlugQuery } from "@/redux/slices/notes/notesApislice";
import { formatDate } from "@/utils/formatDate";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import SkeletonDetail from "../../SkeletonLoading/SkeletonDetail";
import DeleteNoteButton from "../../Buttons/DeleteNoteButton/DeleteNoteButton";
import LikesButton from "../../Buttons/LikesButton/LikesButton";
import FavoritesButton from "../../Buttons/FavoritesButton/FavoritesButton";
import React from "react";

const NoteDetail = () => {
  const { slug } = useParams();

  const {
    data: note,
    isSuccess,
    isError,
    isLoading,
  } = useGetOneBySlugQuery(slug);
  const createDate = note ? formatDate(note.createdAt) : null;
  const updateDate = note ? formatDate(note.updatedAt) : null;
  useEffect(() => {
    const code = document.querySelectorAll(".detail-note code");

    if (code) {
      code.forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
        if (block.textContent !== null) {
          const codeContent = block.textContent;
          const copyButton = document.createElement("button");
          copyButton.innerText = "COPY";
          copyButton.className =
            "bg-[#FAF0E6] text-[#001a2c] px-4 py-1 hover:shadow-buttonMainBrick font-bold";
          copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(codeContent);

            copyButton.className =
              "bg-green-500 px-4 py-1 font-bold shadow-buttonGreenBrick";
            copyButton.innerText = "COPIED";

            setTimeout(() => {
              copyButton.className =
                "bg-[#FAF0E6] text-[#001a2c] px-4 py-1 hover:shadow-buttonMainBrick font-bold";
              copyButton.innerText = "COPY";
            }, 2000);
          });
          block.parentElement?.insertAdjacentElement("beforebegin", copyButton);
        }
      });
    }
  }, [isSuccess]);

  return (
    <div className="container py-12 sm:py-16 lg:py-20">
      <div className="mt-8 mx-auto">
        {isLoading ? (
          <SkeletonDetail />
        ) : (
          <div>
            {isError ? (
              <div>Error loading notes</div>
            ) : (
              isSuccess && (
                <div className="flex flex-col detail-note">
                  <div className="flex flex-col gap-2 border-b-2 border-[#FAF0E6]">
                    <h1 className="font-bold text-2xl">{note.title}</h1>
                    <Breadcrumbs />
                    <div className="flex flex-wrap items-center justify-between py-4">
                      <div className="flex gap-8">
                        <div className="flex flex-col">
                          <p className="text-xs text-blue-500 font-medium">
                            viewed
                          </p>
                          <p className="text-[#9c9b9b] font-medium">
                            {note.viewsCount}
                          </p>
                        </div>

                        <div className="flex flex-col">
                          <p className="text-xs text-green-500 font-medium">
                            create
                          </p>
                          <p className="text-[#9c9b9b] font-medium">
                            {createDate}
                          </p>
                        </div>

                        <div className="flex flex-col">
                          <p className="text-xs text-yellow-500 font-medium">
                            update
                          </p>
                          <p className="text-[#9c9b9b] font-medium">
                            {updateDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-8 sm:mt-0">
                        <LikesButton note={note} />
                        <FavoritesButton note={note} />
                        <DeleteNoteButton note={note} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 py-4">
                    {note.content.map((elem: string, index: number) => (
                      <div
                        className="detail-note"
                        key={index}
                        dangerouslySetInnerHTML={{ __html: elem }}
                      ></div>
                    ))}

                    <ul className="flex text-xs text-black gap-4 mt-8">
                      {note.tags.map((tag: string) => (
                        <li
                          key={tag}
                          className="border text-blue-500 rounded px-1 bg-[#F8F4FF] cursor-pointer hover:grayscale-[80%]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteDetail;
