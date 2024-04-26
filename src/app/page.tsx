import { Metadata } from "next";
import HPHeader from "@/components/HomePage/HPHeader/HPHeader";
import Layout from "@/components/Layout/Layout";
import NotesList from "@/components/NotesPage/NotesList";
import HPNote from "@/components/HomePage/HPNote/HPNote";

export const metadata: Metadata = {
  title: "Home | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Home | Lorenc Base",
    description: "Database of web development solutions",
    url: "/",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};


export default function HomePage() {
  return (
    <Layout>
      <HPHeader />
      <NotesList noteComponent="HPNote"/>
    </Layout>
  );
}
