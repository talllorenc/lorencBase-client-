"use client";

import CreateNoteButton from "@/components/Buttons/CreateNoteButton/CreateNoteButton";
import { Header } from "../Header/Header";
import isAuth from "@/hooks/isAuth";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  const { isUser, isAdmin } = isAuth();
  return (
    <div className="flex-1 flex flex-col py-[52px]">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1">{children}</section>
      </main>
      {isAdmin && <CreateNoteButton />}
    </div>
  );
};

export default Layout;
