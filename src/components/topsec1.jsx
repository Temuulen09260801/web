import React from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
const Topsec1 = () => {
  return (
    <section>
      <img
        src="./images/topsec1.png"
        alt=""
        className="max-w-[1200px] m-auto justify-between p-5 items-center"
      />
      <div className="border border-solid">
        <button>
          <RiArrowLeftWideFill />
        </button>
      </div>
      <div>
        <button className="border border-solid">
          <RiArrowRightWideFill />
        </button>
      </div>
    </section>
  );
};

export default Topsec1;
