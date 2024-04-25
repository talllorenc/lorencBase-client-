"use client";

import { Fira_Mono } from "next/font/google";
import "./globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const inter = Fira_Mono({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
