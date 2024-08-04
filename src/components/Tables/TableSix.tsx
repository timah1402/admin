"use client";
import React, { useState } from "react";

const TableSix = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [showIDCard, setShowIDCard] = useState(false); // State to control showing ID card
  const [verificationSuccess, setVerificationSuccess] = useState(false); // State to track verification success
  const [verificationData, setVerificationData] = useState({
    N_CNI: "",
    expirationDate: "",
  });

  const [userData, setUserData] = useState([
    {
      name: "Lamine",
      surname: "Diallo",
      photo: "/images/fa.png",
      date: "Jan 13, 2023",
      status: "Pending",
      idCard: {
        N_CNI: "123456789",
        expirationDate: "2025-12-31",
        idCardImage: "/images/idPhoto.png",
      },
    },
    {
      name: "Ousmane",
      surname: "Fall",
      status: "Pending",
      photo: "/images/fa.png",
      date: "Feb 14, 2023",
      idCard: {
        N_CNI: "987654321",
        expirationDate: "2024-11-30",
        idCardImage: "/images/idPhoto.png",
      },
    },
    {
      name: "Sidy",
      surname: "Ndao",
      status: "Valid",
      photo: "/images/fa.png",
      date: "Mar 15, 2023",
      idCard: {
        N_CNI: "567891234",
        expirationDate: "2023-10-20",
        idCardImage: "/images/idPhoto.png",
      },
    },
    {
      name: "Sokhna",
      surname: "Gueye",
      status: "Pending",
      photo: "/images/fa.png",
      date: "Apr 16, 2023",
      idCard: {
        N_CNI: "192837465",
        expirationDate: "2026-05-15",
        idCardImage: "/images/idPhoto.png",
      },
    },
  ]);

  const handleUserClick = (user: any) => {
    if (user.status === "Pending") {
      setSelectedUser(user);
      setShowIDCard(false); // Hide ID card initially when user details are shown
      setVerificationSuccess(false); // Reset verification success state
    } else {
      setSelectedUser(null); // Deselect if user status is not "Pending"
    }
  };

  const handleVerifyClick = () => {
    // Perform verification logic here
    // For demonstration, we will simply mark verification as successful and show ID card
    setVerificationSuccess(true);
    setShowIDCard(true);
  };

  const handleContinue = () => {
    // Check if entered N_CNI and expiration date match with user data
    if (
      selectedUser &&
      selectedUser.idCard.N_CNI === verificationData.N_CNI &&
      selectedUser.idCard.expirationDate === verificationData.expirationDate
    ) {
      // Update user status to Valid
      const updatedUsers = userData.map((user) =>
        user === selectedUser ? { ...user, status: "Valid" } : user,
      );
      setUserData(updatedUsers);
    } else {
      // Update user status to Refuse
      const updatedUsers = userData.map((user) =>
        user === selectedUser ? { ...user, status: "Refuse" } : user,
      );
      setUserData(updatedUsers);
    }

    // Reset states
    setSelectedUser(null);
    setShowIDCard(false);
    setVerificationSuccess(false);
    setVerificationData({
      N_CNI: "",
      expirationDate: "",
    });
  };

  const handleVerificationInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setVerificationData({ ...verificationData, [name]: value });
  };

  const filteredData = userData.filter((user) =>
    `${user.name} ${user.surname}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-gray-100 flex min-h-screen  justify-center">
      <div className="w-full max-w-5xl rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Request Management</h2>
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
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((user, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-100 cursor-pointer ${
                    selectedUser === user ? "bg-blue-200 dark:bg-meta-4 " : ""
                  }`}
                  onClick={() => handleUserClick(user)}
                >
                  <td className="flex items-center border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <img
                      src={user.photo}
                      alt={`${user.name}'s profile`}
                      className="mr-4 h-10 w-10 rounded-full"
                    />
                    <h5 className="font-medium text-black dark:text-white">
                      {user.name} {user.surname}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        user.status === "Pending"
                          ? "bg-yellow-500"
                          : user.status === "Valid"
                            ? "bg-blue-700"
                            : "bg-meta-1"
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
          {selectedUser && selectedUser.status === "Pending" && (
            <div className="bg-gray-200 mt-4 rounded-lg p-4">
              <h3 className="text-lg font-semibold">User Details</h3>
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Surname:</strong> {selectedUser.surname}
              </p>
              <p>
                <strong>N_CNI:</strong> {selectedUser.idCard.N_CNI}
              </p>
              <p>
                <strong>Expiration Date:</strong>{" "}
                {selectedUser.idCard.expirationDate}
              </p>
              <div className="mt-4">
                <button
                  className="mt-2 rounded-md bg-blue-700 px-4 py-2 text-white"
                  onClick={handleVerifyClick}
                >
                  Verify
                </button>
              </div>
            </div>
          )}
          {showIDCard && selectedUser && selectedUser.status === "Pending" && (
            <div className="bg-gray-200 mt-4 rounded-lg p-4">
              <h3 className="text-lg font-semibold">ID Card</h3>
              <img
                src={selectedUser.idCard.idCardImage}
                alt="ID Card"
                className="mt-2 h-auto max-w-full rounded-lg"
                style={{ maxWidth: "100%" }}
              />
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter N_CNI"
                  className="border-gray-300 mb-2 w-full rounded border px-3 py-2"
                  value={verificationData.N_CNI}
                  name="N_CNI"
                  onChange={handleVerificationInputChange}
                />
                <input
                  type="text"
                  placeholder="Enter Expiration Date"
                  className="border-gray-300 mb-2 w-full rounded border px-3 py-2"
                  value={verificationData.expirationDate}
                  name="expirationDate"
                  onChange={handleVerificationInputChange}
                />
                <button
                  className="mt-2 rounded-md bg-blue-700 px-4 py-2 text-white"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableSix;
