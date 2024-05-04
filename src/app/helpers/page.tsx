import Helpers from "@/components/Pages/HelpersPage/Helpers";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Helpers | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Helpers | Lorenc Base",
    description: "Database of web development solutions",
    url: "/helpers",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const HelpersPage = () => {
  return (
    <Layout>
      <Helpers />
    </Layout>
  );
};

export default HelpersPage;
