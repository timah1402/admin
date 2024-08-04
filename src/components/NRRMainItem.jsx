import React from "react";
import SearchBox from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/Switchers/SearchBox.jsx";

import NRList from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/Switchers/NRRMainItem.jsx";
import NRListRight from "/Users/mac/Downloads/free-nextjs-admin-dashboard-main/src/components/Switchers/NRListRight.jsx";

export default function NRRMainItem({ results }) {
  return (
    <div>
      <div className="flex items-center gap-[257px]">
        <h1 className="text-md font-bold">Requests</h1>

        <div className="flex items-center gap-2 ">
          <SearchBox />
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
