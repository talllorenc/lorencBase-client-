import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Profile from "@/components/ProfilePage/Profile";

export const metadata: Metadata = {
  title: "Profile | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Profile | Lorenc Base",
    description: "Database of web development solutions",
    url: "/profile",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const ProfilePage = () => {
  return (
    <Layout>
      <Profile/>
    </Layout>
  );
};
export default ProfilePage;
