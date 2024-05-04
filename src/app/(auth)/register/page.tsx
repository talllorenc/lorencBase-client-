import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import Register from "@/components/Pages/RegisrerPage/Regisrer";

export const metadata: Metadata = {
  title: "Sign up | Lorenc Base",
  description: "Database of web development solutions",
  openGraph: {
    title: "Sign up | Lorenc Base",
    description: "Database of web development solutions",
    url: "/register",
    siteName: "lorenc-base",
    locale: "en",
    type: "website",
  },
};

const RegisterPage = () => {
  return (
    <Layout>
      <Register/>
    </Layout>
  );
};

export default RegisterPage;
