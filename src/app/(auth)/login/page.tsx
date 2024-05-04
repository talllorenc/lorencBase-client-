import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Login from "@/components/Pages/LoginPage/LoginPage";

export const metadata: Metadata = {
  title: "Sign in | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Sign in | Lorenc Base",
    description: "Database of web development solutions",
    url: "/login",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const RegisterPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default RegisterPage;