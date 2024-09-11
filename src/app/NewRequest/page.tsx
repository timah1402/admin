import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableSix from "@/components/Tables/TableSix";
export const metadata: Metadata = {
  title: "page Admin| TailAdmin - Votre temps notre priorité",
  description: "",
};

export default function page() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Requests" />
      <TableSix></TableSix>
    </DefaultLayout>
  );
}
