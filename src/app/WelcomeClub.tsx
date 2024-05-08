import React from "react";
import Image from "next/image";
import TransparentImg from "../../public/asset/image/transparent.png.jpg";
import HaalandImg from "../../public/asset/image/fc24-pre-order-founders.jpg.adapt.1920w.jpg";
import Logo from "../../public/asset/image/logo.svg";
import Button from "@/components/Button";

function WelcomeClub() {
  return (
    <div className="relative">
      <div className="relative w-full max-lg:h-[1000px]">
        <Image
          src={TransparentImg}
          alt=""
          className="relative w-full max-lg:h-[1000px]"
        />
        <div className="w-full absolute top-[50%] translate-y-[-50%] flex max-lg:flex-col items-center max-lg:top-0 max-lg:translate-y-0 max-lg:justify-center justify-between">
          <div className="w-1/2 px-10 left-0 text-center max-lg:w-full max-lg:translate-y-[150%]">
            <Image src={Logo} alt="" className="w-[200px] h-fit mx-auto" />
            <h1 className="text-white text-[44px] font-bold my-[15px]">
              WELCOME TO THE CLUB
            </h1>
            <p className="text-white text-[18px] my-[15px]">
              Moves, looks and plays like football. EA SPORTS FC™ 24 brings you
              closer to football than ever before, powered by a trinity of
              technologies driving gameplay realism in every match.
            </p>
            <Button
              className="text-black px-6 py-4 max-lg:hidden"
              before="before:bg-[#07F468]"
            >
              Play Now
            </Button>
          </div>
          <div className="w-1/2 absolute right-0 max-lg:w-full">
            <Image src={HaalandImg} alt="" className="relative" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeClub;
