"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    title: "Female Habesha dress collections",
    description: "Sale! Up to 50% off!",
    img: "https://res.cloudinary.com/diqgie9yt/image/upload/v1717062428/konjo-habesha/two_enymo8.jpg",
    url: "/shop",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Male collections",
    description: "Sale! Up to 50% off!",
    img: "https://res.cloudinary.com/diqgie9yt/image/upload/v1717062427/konjo-habesha/three_bujvdu.jpg",
    url: "/shop",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Kids collections",
    description: "Sale! Up to 50% off!",
    img: "https://res.cloudinary.com/diqgie9yt/image/upload/v1717062258/konjo-habesha/one_jw32ab.jpg",
    url: "/shop",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full w-max transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} flex h-full w-screen flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="flex h-1/2 flex-col items-center justify-center gap-8 text-center xl:h-full xl:w-1/2 2xl:gap-12">
              <h2 className="text-xl dark:text-black lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-center text-2xl font-semibold dark:text-black md:text-5xl lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <Button className="rounded-md px-4 py-3">SHOP NOW</Button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 m-auto flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`flex h-3  w-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-gray-600 ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="h-[6px] w-[6px] rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
