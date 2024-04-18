import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Contacts from "@/components/ContactsPage/Contacts";

export const metadata: Metadata = {
  title: "Contacts | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Contacts | Lorenc Base",
    description: "Database of web development solutions",
    url: "/contacts",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const LoginPage = () => {
  return (
    <Layout>
        <Contacts/>
    </Layout>
  );
};
export default LoginPage;
