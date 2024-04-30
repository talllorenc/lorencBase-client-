import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Admin | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Admin | Lorenc Base",
    description: "Database of web development solutions",
    url: "/admin",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const ProfilePage = () => {
  return (
    <Layout>
        admin
    </Layout>
  );
};
export default ProfilePage;
