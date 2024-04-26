import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import NotesList from "@/components/NotesPage/NotesList";

export const metadata: Metadata = {
  title: "Notes | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Notes | Lorenc Base",
    description: "Database of web development solutions",
    url: "/notes",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const page = () => {
  return (
    <Layout>
      <NotesList noteComponent="Note"/>
    </Layout>
  );
};

export default page;
