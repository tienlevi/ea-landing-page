/* eslint-disable react/no-unescaped-entities */
import Banner from "@/components/Banner";
import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import BannerImg from "../../public/asset/image/fc24-hero-md-landing-page-reveal-7x2-xl.jpg.adapt.crop7x2.1920w.jpg";
import TeamOfTheYearLogo from "../../public/asset/image/fc24-toty-vote-open-hero-md-logo-xl-lg-md.png.adapt.crop7x2.1920w.png";
import Button from "@/components/Button";

function TeamOfTheYear() {
  return (
    <div className="relative mt-[50px]">
      <Banner src={BannerImg} />
      <Section className="">
        <div className="w-[500px] flex flex-col absolute top-[50%] translate-y-[-50%] left-[15%]">
          <Image src={TeamOfTheYearLogo} alt="" />
          <p className="text-[18px] font-semibold text-[#FFF] text-center w-[100%] ">
            Nominated for world-class performances. Backed by millions around
            the world. Meet the Men's and Women's Team of the Year XIs.
          </p>
          <div className="flex justify-evenly mt-6">
            <Button
              className="py-4 px-6 text-white text-[18px]"
              before="before:border-2 before:border-white"
            >
              Men's TOTY
            </Button>
            <Button
              className="py-4 px-6 text-white text-[18px]"
              before="before:border-2 before:border-white"
            >
              Women's TOTY
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default TeamOfTheYear;
