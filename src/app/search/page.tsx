import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Search from "@/components/Pages/SearchPage/Search";

export const metadata: Metadata = {
  title: "Search | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Search | Lorenc Base",
    description: "Database of web development solutions",
    url: "/search",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const SearchPage = () => {
  return (
    <Layout>
        <Search/>
    </Layout>
  );
};
export default SearchPage;
