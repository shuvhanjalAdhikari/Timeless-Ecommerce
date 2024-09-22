import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Cards = (props) => {
  return (
    <div className="flex flex-col items-center border border-gray-300 shadow-md hover:shadow-2xl transition-shadow duration-500 p-5 m-2 text-center w-[300px] max-w-[300px]">
      <img
        className="w-[200px] h-[300px] object-cover mb-4"
        src={props.image}
        alt=""
      />
      <h2 className="text-black">{props.name}</h2>
      <span className=" text-black">Price: {props.price}</span>
      <div className="flex text-yellow-500 mt-2">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      </div>
      <br />
      <button className="bg-[#12223b] text-white border-2 border-[#12223b] px-3 py-1 cursor-pointer hover:bg-[#fff] hover:text-[#0097fb] hover:border-[#0097fb] shadow-md transition-shadow duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default Cards;
