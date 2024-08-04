"use client";

import Image from "next/image";
import React, { useState } from "react";
import NRListRight from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/Switchers/NRListRight.jsx";

export default function NRList({ results }) {
  const [selected, setSelected] = useState(0); // Add state to track selected item
  const [ct, setCt] = useState(0); // Add state to track selected item
  const [myBool, setMyBool] = useState(false); // Add state to track selected item

  return (
    <div className="flex">
      <div className="bg-my2ndBlue mt-2 flex h-[500px] flex-col overflow-hidden rounded-xl">
        {" "}
        {/* Ensure overflow is hidden for the parent */}
        <div className="w-[450px] flex-grow overflow-y-auto rounded-t-xl bg-white pl-2 pt-1">
          {" "}
          {/* Full width for the inner container and vertical scrolling */}
          {results.map((result, index) => (
            <div
              key={index}
              className={`my-2 flex h-10 cursor-pointer items-center 
              ${index === selected && myBool == true ? "bg-my2ndBlue" : "bg-white"}`}
              onClick={() => {
                setSelected(index), setCt((c) => c + 1), setMyBool(true);
                console.log(`This is ct ==${ct} and mybool is ${myBool}`);
                if (ct === 1) {
                  setSelected(0), setCt(0), setMyBool(false);
                }
              }} // Set selected item on click
            >
              <div>
                <Image
                  className="rounded-full"
                  src={result.userPhoto}
                  width={25}
                  height={25}
                  alt="ras"
                />
              </div>

              <div className="flex w-[290px] items-center gap-1 pl-2">
                <div>{result.firstName}</div>
                <div>{result.lastName}</div>
              </div>

              <div>
                <p
                  className={`flex w-20 rounded-2xl py-1 pl-3 text-sm text-white
                ${result.status === "Rejected" ? "bg-myRed pr-3" : ""}
                ${result.status === "Validated" ? "bg-myBlue" : ""}
                ${result.status === "Pending" ? "bg-my2ndGrey pr-4" : ""}`}
                >
                  {result.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {myBool == true ? (
        <NRListRight results={results} selectedIndex={selected} />
      ) : (
        ""
      )}
      {/* <NRListRight results={results}/> */}
    </div>
  );
}
