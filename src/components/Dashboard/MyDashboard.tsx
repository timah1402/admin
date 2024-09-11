"use client";
import dynamic from "next/dynamic";
import React from "react";

import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import { FaUsers } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaExclamation } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";



const MyDashboard: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Identified Users" total="12600">
          {<FaUsers className="text-2xl text-blue-700 dark:text-white" />}
        </CardDataStats>
        <CardDataStats title="Verified Users" total="6000">
          <RiVerifiedBadgeLine className="text-2xl text-blue-700  dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Unverified Users" total="2000">
          <FaExclamation className="text-2xl text-blue-700  dark:text-white" />
        </CardDataStats>
        <CardDataStats title="Rejected Users" total="1000">
          <MdOutlineDangerous className="text-2xl text-blue-700  dark:text-white" />
        </CardDataStats>
      </div>

      <div>
        <h1 className="pb-4 text-4xl  font-bold text-black dark:text-white"></h1>
        <TableOne />
      </div>
    </div>
  );
};

export default MyDashboard;
