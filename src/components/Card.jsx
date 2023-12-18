import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  const handleDownload = () => {
    alert("Server is down");
  };
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElasticity={0.1}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-sky-200 bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold justify-center">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex item-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <button onClick={handleDownload}>
                <LuDownload size="0.7em" color="#fff" />
              </button>
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <button onClick={handleDownload} className="text-sm font-semibold">
              {data.tag.tagTitle}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
