import React, { useEffect, useRef } from "react";

const Searchbar = ({ searchText, setSearchText }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center my-4 ">
      <input
        className="w-96 h-8 border border-yellow-600 px-2 rounded-tl-lg rounded-bl-lg focus:outline-none"
        placeholder="Search your favorite restaurant . . . "
        ref={searchRef}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="bg-yellow-600 text-white px-2 rounded-tr-lg rounded-br-lg hover:bg-yellow-700 transition-colors">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
