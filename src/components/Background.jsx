import React from "react";

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <div className="w-full absolute top-[5%] p-10 flex justify-center text-zinc-500 font-semibold text-xl">
        Documents
      </div>
      <h1 className="text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] leading-none tracking-tighter hover:text-yellow-500">
        Docs
      </h1>
    </div>
  );
}

export default Background;
