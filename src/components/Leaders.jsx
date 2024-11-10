import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/userAPI";

const Leaders = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        // Sort users by points in descending order and slice the top 3
        const top3Users = data.data
          .sort((a, b) => b.points - a.points)
          .slice(0, 3);
        setUsers(top3Users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-[#fff] min-h-[100vh] flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold mb-4 mt-10">Leaders</h1>

      <div className="flex justify-center items-end mb-10 mt-10">
        {/* 2nd Place */}
        <div className="flex flex-col items-center w-24 mx-4">
          <img
            src={users[1]?.image || "./src/assets/users/img-5.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-semibold">
            {users[1]?.name.split(" ")[0] || "Second Place"}
          </p>
          <div className="w-full h-36 bg-green-500 rounded-t-lg flex flex-col justify-center items-center">
            <p className="text-lg font-bold">2nd</p>
            <p className="text-sm">
              {users[1]?.points || 0} PTS : ${users[1]?.prize || 60}
            </p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center w-28 mx-4">
          <img
            src={users[0]?.image || "./src/assets/users/img-4.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-semibold">
            {users[0]?.name.split(" ")[0] || "First Place"}
          </p>
          <div className="w-full h-48 bg-yellow-200 rounded-t-lg flex flex-col justify-center items-center">
            <p className="text-lg font-bold">1st</p>
            <p className="text-sm">
              {users[0]?.points || 0} PTS : ${users[0]?.prize || 100}
            </p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center w-24 mx-4">
          <img
            src={users[2]?.image || "./src/assets/users/img-3.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <p className="font-semibold">
            {users[2]?.name.split(" ")[0] || "Third Place"}
          </p>
          <div className="w-full h-32 bg-blue-400 rounded-t-lg flex flex-col justify-center items-center">
            <p className="text-lg font-bold">3rd</p>
            <p className="text-sm">
              {users[2]?.points || 0} PTS : ${users[2]?.prize || 40}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
