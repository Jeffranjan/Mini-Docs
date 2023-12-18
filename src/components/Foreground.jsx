import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = userRef(null);
  const data = [
    {
      desc: "Hey there!, This is Ranjan Gupta and I made this cool looking docs web app",
      filesize: "0.9Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hey there!, This is Ranjan Gupta and I made this cool looking docs web app",
      filesize: "0.9Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hey there!, This is Ranjan Gupta and I made this cool looking docs web app",
      filesize: "0.9Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
    },
  ];
  useState();
  return (
    <div>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
