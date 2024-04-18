"use client"

import { Header } from "../Header/Header";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col pt-[52px]">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
