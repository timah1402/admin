import MyDashboard from "@/components/Dashboard/MyDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Head from "next/head";

export const metadata: Metadata = {
  title: "page Admin  | Votre temps, notre priorité",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <MyDashboard />
      </DefaultLayout>
    </>
  );
}
