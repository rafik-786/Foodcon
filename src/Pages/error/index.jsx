import { FaSkullCrossbones } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div className="flex w-full h-96   justify-center items-center text-5xl space-x-6">
      <h1 className=" text-gray-600 ">Page Not Found</h1>
      <FaSkullCrossbones className="text-red-500" />
    </div>
  );
};

export default ErrorPage;
