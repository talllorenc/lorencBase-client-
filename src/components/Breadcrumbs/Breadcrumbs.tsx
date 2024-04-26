"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome, FaAngleRight } from "react-icons/fa";

const Breadcrumbs = ({}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="">
      <ul className="flex items-center gap-2 text-[#C6C3B5]">
        <li className="hover:scale-110">
          <Link href={"/"} >
            <FaHome />
          </Link>
        </li>
        {pathNames.length > 0 && <FaAngleRight />}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses = paths === href ? "text-[#CCCCFF] font-bold" : "hover:text-[#CCCCFF]";
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);

          return (
            <div className="flex items-center" key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && <FaAngleRight />}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Breadcrumbs;
