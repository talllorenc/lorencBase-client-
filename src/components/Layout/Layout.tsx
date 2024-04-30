"use client";

import CreateNoteButton from "../CreateNoteButton/CreateNoteButton";
import { Header } from "../Header/Header";
import useAuth from "@/hooks/useAuth";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  const { role } = useAuth();

  return (
    <div className="flex-1 flex flex-col py-[52px]">
      <Header />
      <main className="flex-1 flex flex-col">
        <section className="flex-1">{children}</section>
      </main>
      {role === "admin" && <CreateNoteButton />}
    </div>
  );
};

export default Layout;
