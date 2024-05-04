import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import CreateNote from "@/components/Pages/CreateNotePage/CreateNote";

export const metadata: Metadata = {
  title: "Create note | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Create note | Lorenc Base",
    description: "Database of web development solutions",
    url: "/create-note",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const CreatePNotePage = () => {
  return (
    <Layout>
        <CreateNote/>
    </Layout>
  )
}

export default CreatePNotePage