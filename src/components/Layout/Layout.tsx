"use client"

import { Header } from "../Header/Header";
import { useEffect } from "react";
import { useLazyProfileQuery } from "@/services/user.service";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  const [triggerCurrentUser] = useLazyProfileQuery();

  useEffect(()=> {
    triggerCurrentUser().unwrap();
  }, [])

  return (
    <div className="flex-1 flex flex-col pt-[65px] overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
