/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/asset/image/Banner.jpg";
import FCLogo from "../../public/asset/image/fc24-logo-horizontal-ratings-hero-med-7x2-xl.png.adapt.crop7x2.1920w.png";
import Button from "@/components/Button";

function Ratings() {
  return (
    <div className="relative">
      <Banner src={BannerImg} />
      <Section className="">
        <div className="w-[500px] flex flex-col absolute top-[50%] translate-y-[-50%] left-[15%] max-md:left-[50%] max-md:translate-x-[-50%]">
          <Image src={FCLogo} alt="" className="mx-auto max-md:w-[250px]" />
          <p className="text-[18px] font-semibold text-[#FFF] text-center w-[100%] max-md:mt-3">
            The new EA SPORTS FC 24 Ratings have arrived along with the new
            PlayStyles for players across The World's Game. Check out the
            Ratings Database to see how your favourites rank.
          </p>
          <div className="flex justify-evenly mt-6">
            <Button
              className="py-4 px-6 text-white text-[18px]"
              before="before:border-2 before:border-white"
            >
              See The Ratings
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Ratings;
