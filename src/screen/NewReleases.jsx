import React, { useState } from "react";
import { imgShoe } from "../links";
import { Button, Progress, Carousell } from "../components";

const NewReleases = () => {
    const [levelSlider, setLevelSlider] = useState(10);
    const [currentProduct, setCurrentProduct] = useState(imgShoe[0]);

    const handleClick = (idx) => {
        setCurrentProduct(imgShoe[idx]);
        if (idx === 0) {
            setLevelSlider(10);
        }
        if (idx === 1) {
            setLevelSlider(50);
        }
        if (idx === 2) {
            setLevelSlider(100);
        }
    };

    return (
        <>
            <div className="pt-28 lg:pt-28 flex flex-col lg:flex-row">
                <section className="w-full md:w-full lg:w-[50%] break-words flex gap-6 md:gap-16 relative mb-10 md:mb-0">
                    <div className="w-60 flex justify-between">
                        <Progress value={levelSlider} />
                        <div className="h-full flex flex-col justify-between">
                            <span className="text-lg font-semibold">01</span>
                            <span className="text-lg font-semibold">02</span>
                            <span className="text-lg font-semibold">03</span>
                        </div>
                    </div>
                    <div>
                        <header className="mb-6">
                            <h1 className="text-5xl font-extrabold m-0">
                                Nike <br /> {currentProduct.name}
                            </h1>
                        </header>
                        <p className="text-sm text-black text-opacity-50 font-medium mb-6">
                            {currentProduct.text}
                        </p>
                        <div className="flex flex-col-reverse gap-7 sm:flex-row sm:items-center sm:justify-between">
                            <Button variant="default" size="lg">
                                Add to Bag
                            </Button>
                            <h5 className="text-4xl font-extrabold">
                                ${currentProduct.price}
                            </h5>
                        </div>
                    </div>
                </section>
                <div className="w-full lg:w-[50%] relative overflow-y-visible">
                    <img
                        src={currentProduct.img}
                        alt=""
                        className="mx-auto w-4/5 sm:w-2/3 lg:mx-0 lg:absolute top-0 left-0 h-full object-contain h-100 md:translate-y-9 md:-rotate-12 lg:w-full lg:scale-100 lg:-rotate-45 lg:-translate-x-9 lg:translate-y-16"
                    />
                </div>
            </div>
            <Carousell
                currentImg={currentProduct.img}
                handleClick={handleClick}
            />
        </>
    );
};

export default NewReleases;
