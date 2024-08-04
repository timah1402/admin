import React, { useState } from "react";

const userData = [
  {
    name: "Lamine Diallo",
    photo: "/images/fa.png",
    date: "Jan 13, 2023",
    status: "Valid",
  },
  {
    name: "Ousmane Fall",
    photo: "/images/fa.png",
    date: "Feb 14, 2023",
    status: "Refuse",
  },
  {
    name: "Sidy Ndao",
    photo: "/images/fa.png",
    date: "Mar 15, 2023",
    status: "Valid",
  },
  {
    name: "Sokhna Gueye",
    photo: "/images/fa.png",
    date: "Apr 16, 2023",
    status: "Refuse",
  },
  {
    name: "Aminata Sall",
    photo: "/images/fa.png",
    date: "May 17, 2023",
    status: "Valid",
  },
  {
    name: "Mbama Kombila Prince Gindas",
    photo: "/images/fa.png",
    date: "Jun 18, 2023",
    status: "Refuse",
  },
];

const TableOne = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-gray-100 flex min-h-screen  justify-center">
      <div className="w-full  rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">History</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-gray-300 rounded border px-3 py-2"
          />
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  Users
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user, key) => (
                <tr key={key}>
                  <td className="flex items-center border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <img
                      src={user.photo}
                      alt={`${user.name}'s profile`}
                      className="mr-4 h-10 w-10 rounded-full"
                    />
                    <h5 className="font-medium text-black dark:text-white">
                      {user.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">{user.date}</p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        user.status === "Refuse" ? "bg-meta-1" : "bg-blue-500"
                      }; ${
                        user.status === "Valid" ? "bg-blue-700" : "bg-meta-1"
                      } text-white`}
                      style={{ minWidth: "70px", justifyContent: "center" }}
                    >
                      {user.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
