import React from "react";

function User({ user }) {
  const starColor = user.isVerified ? "text-green-400" : "text-red-600";
  return (
    <li
      key={user.id}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 text-center">
        <div className="relative mb-4">
          <img
            src={user.picUrl}
            alt={user.username}
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-gray-100"
          />
          <i
            className={
              "fa-solid fa-star absolute top-3 right-5 transform translate-x-6 text-3xl " +
              starColor
            }
          ></i>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {user.username}
        </h2>
        <p className="text-gray-600 mb-1">{user.email}</p>
        <p className="text-gray-500">{user.phoneNumber}</p>
      </div>
    </li>
  );
}

export default User;
