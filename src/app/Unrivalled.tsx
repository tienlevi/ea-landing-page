import React from "react";
import Image from "next/image";
import HeroLangues from "../../public/asset/image/fc24-hero-lg-leagues-from-around-the-world-lg-md-3x2.jpg.adapt.1920w.jpg";
import Button from "@/components/Button";

function Unrivalled() {
  return (
    <div className="relative">
      <Image
        src={HeroLangues}
        alt=""
        className="relative w-full h-[430px] object-cover"
      />
      <div className="mb-[15px] absolute w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-center text-white text-[44px] font-bold">
          UNRIVALLED AUTHENTICITY
        </h1>
        <p className="mt-[15px] text-center text-white text-[24px]">
          EA SPORTS FC™ 24 is home to 19,000+ fully licensed players, 700+
          teams, 100+ stadiums and 30+ leagues across world football.
        </p>
        <div className="flex justify-center mt-[15px]">
          <Button
            className="py-4 px-6 text-white mx-auto font-semibold"
            before="before:border-2 before:border-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Unrivalled;
