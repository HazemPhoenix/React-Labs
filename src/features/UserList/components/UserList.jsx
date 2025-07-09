import React, { useState } from "react";
import User from "./User";
import SearchBar from "./SearchBar";

function UserList() {
  const userData = [
    {
      id: 1,
      picUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      username: "johnsmith",
      email: "john.smith@email.com",
      phoneNumber: "+1 (555) 123-4567",
      isVerified: true,
    },
    {
      id: 2,
      picUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      username: "sarahdoe",
      email: "sarah.doe@email.com",
      phoneNumber: "+1 (555) 987-6543",
      isVerified: false,
    },
    {
      id: 3,
      picUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      username: "mikejohnson",
      email: "mike.johnson@email.com",
      phoneNumber: "+1 (555) 246-8135",
      isVerified: true,
    },
    {
      id: 4,
      picUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      username: "emilychen",
      email: "emily.chen@email.com",
      phoneNumber: "+1 (555) 369-2580",
      isVerified: false,
    },
    {
      id: 5,
      picUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      username: "davidwilson",
      email: "david.wilson@email.com",
      phoneNumber: "+1 (555) 147-9632",
      isVerified: true,
    },
    {
      id: 6,
      picUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop&crop=face",
      username: "lisagarcia",
      email: "lisa.garcia@email.com",
      phoneNumber: "+1 (555) 753-8421",
      isVerified: false,
    },
  ];

  const [filteredUsers, setFilteredUsers] = useState(userData);

  const filterUsers = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(userData);
    } else {
      const filtered = userData.filter((user) => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredUsers(filtered);
    }
  };

  return (
    <>
      <SearchBar filterUsers={filterUsers} />
      {filteredUsers.length > 0 ? (
        <ul className="w-full md:w-[40vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {filteredUsers.map((user) => {
            return <User user={user} key={user.id} />;
          })}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-8">No users found</p>
      )}
    </>
  );
}

export default UserList;
