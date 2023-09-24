const Shimmer = ({ id }) => {
  return (
    <div className="border border-gray-300 w-44 h-52 p-2">
      <div className="bg-gray-200 w-full h-2/3 p-2 "></div>
      <div className="bg-gray-200 w-full h-1 p-2 my-1"></div>
      <div className="bg-gray-200 w-full h-1 p-2 my-1"></div>
      <div className="flex space-x-1">
        <div className="bg-gray-200 w-1/2 h-1 p-2 my-1"></div>
        <div className="bg-gray-200 w-1/2 h-1 p-2 my-1"></div>
      </div>
    </div>
  );
};

export default Shimmer;
