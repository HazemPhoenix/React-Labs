import { useState } from "react";

function SearchBar({ filterUsers }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterUsers(searchTerm);
  };

  return (
    <form
      className="md:w-[30vw] flex flex-col md:flex-row justify-center mx-4 md:mx-auto mt-10 mb-5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        className=" text-xl border-1 outline-0 px-2 py-3 border-b-0 md:border-b-1 md:border-r-0 md:rounded-l-2xl"
        placeholder="Search users.."
        value={searchTerm}
        onChange={handleSearchInput}
      />
      <button className="border-1 px-5 py-2 md:rounded-r-2xl cursor-pointer hover:border-gray-500 hover:bg-gray-900 transition-all text-xl">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
