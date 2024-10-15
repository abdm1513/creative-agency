import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div className="space-y-10">
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-5xl text-darkBlue">
        Unlock Your Startup's Full Potential!
        </p>
        <p className="text-[1.375rem] font-[500]">
        Our goal is to be at the forefront of the creative services industry as a digital creator. We strive to inspire and innovate in every project we undertake.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1.56rem] items-center">
            <img src="/images/fancy_play_icon.png" alt="play icon" />
            <p className="font-bold text-normal">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default HeroSection;
