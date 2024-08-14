import React from "react";
import { imgShoe } from "../links";

const Carousell = ({ currentImg, handleClick }) => {
    return (
        <div className="flex justify-center lg:justify-start gap-2 sm:gap-10 pt-24 h-96">
            {imgShoe.map(({ img, id }, idx) => {
                return (
                    <div
                        key={id}
                        className={`relative h-40 w-40 p-3 cursor-pointer rounded-lg flex items-center transition-all overflow-hidden ${
                            img === currentImg
                                ? "opacity-100 shadow-lg bg-[#F6F0F0]"
                                : "opacity-55 border border-neutral-700 border-2 saturate-0"
                        }`}
                        onClick={() => handleClick(idx)}
                    >
                        <img
                            src={img}
                            className="absolute -rotate-45 scale-150"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Carousell;
