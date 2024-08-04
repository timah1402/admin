import React from "react";
import SearchBox from "./SearchBox";
// import MyIcon from '@/utils/MyIcons'
import NRList from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/NRList.jsx";
import NRListRight from "./NRListRight";

export default function NRRMainItem({ results }) {
  return (
    <div>
      <div className="flex items-center gap-[257px]">
        <h1 className="text-md font-bold">Requests</h1>

        <div className="flex items-center gap-2 ">
          <SearchBox />
          <h1>hello </h1>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-[300px] text-sm font-bold">
        <div>User</div>
        <div>Status</div>
      </div>

      <NRList results={results} />
    </div>
  );
}
