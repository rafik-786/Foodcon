import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const ShimmerUI = ({ boxes = 100, hidden = false, count = 12 }) => {
  const [page, setPage] = useState(1);
  const len = Math.ceil(boxes / count);
  return (
    <div className={hidden ? "hidden" : ""}>
      <div className="grid grid-cols-4 gap-3">
        {Array(boxes)
          .fill("")
          .slice(page * count - count, page * count)
          .map((_, indx) => (
            <Shimmer key={indx} id={page * count - count + indx + 1} />
          ))}
      </div>
      <div className="grid grid-flow-col  justify-start space-x-3 items-center w-1/3 mx-auto my-4">
        {page > 1 && (
          <span
            className=" text-yellow-700 cursor-pointer"
            onClick={() => setPage((prev) => prev - 1)}
          >
            <BsFillCaretLeftFill />
          </span>
        )}
        {[...Array(len)].map((_, idx) => (
          <span
            className={`border  border-yellow-700  px-2 ${
              idx + 1 == page ? "text-white bg-yellow-700" : ""
            } cursor-pointer hover:bg-yellow-700 hover:text-white transition-all 
            
            `}
            key={idx}
            onClick={() => setPage(idx + 1)}
          >
            {idx + 1}
          </span>
        ))}
        {page < len && (
          <span
            className={" px-2 text-yellow-700 cursor-pointer "}
            onClick={() =>
              setPage((prev) => {
                console.log(page);
                return prev + 1;
              })
            }
          >
            <BsFillCaretRightFill />
          </span>
        )}
      </div>
    </div>
  );
};

export default ShimmerUI;
