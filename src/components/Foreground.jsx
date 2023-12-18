import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "Hey there!, This is Ranjan Gupta and I made this cool looking docs web app",
      filesize: "0.9Mb",
      Close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  useState();
  return (
    <div>
      <div className="fixed top-0 left-0 z-[3] w-full h-full">
        {data.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
