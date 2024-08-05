import React from "react";
import All from "./trademap";

const Trades = [
  {
    img: "/images/blog-1.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-2.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-3.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    img: "/images/blog-4.png",
    category: "Technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];
const Trade = () => {
  return (
    <>
      <section className="max-w-[1200px] m-auto justify-between p-5 items-center">
        <div className="text-2xl font-bold">Trading</div>
        <All allBlog={Trades} />
      </section>
    </>
  );
};

export default Trade;
