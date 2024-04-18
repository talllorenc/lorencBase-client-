import { Metadata } from "next";
import HPHeader from "@/components/HomePage/HPHeader/HPHeader";
import Layout from "@/components/Layout/Layout";

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
    </Layout>
  );
}
