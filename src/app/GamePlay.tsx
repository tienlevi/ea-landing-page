"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "@/components/Button";
import Section from "@/components/Section";

const Lists = [
  {
    name: "CROSS-PLAY",
    button: "Pitch Notes",
  },
  { name: "CARRER mode", button: "Deep Dive" },
  { name: "Ultimate team", button: "Deep Dive" },
  { name: "Clubs", button: "Deep Dive" },
  { name: "Playstyles", button: "Deep Dive" },
];

function GamePlay() {
  const element = useRef<HTMLDivElement>(null);
  const scrollElement = useRef<HTMLDivElement>(null);
  const scrollClick = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const { scrollX }: any = useScroll({ container: scrollElement });
  const transform: any = useTransform(scrollX, [0, 800], [0, -800]);

  const handleScrollLeft = () => {
    if (scrollClick.current && scrollElement.current) {
      scrollClick.current.style.transform = `translateX(0px)`;
      scrollElement.current.scrollLeft = 0;
    }
  };
  const handleScrollRight = () => {
    if (scrollClick.current && scrollElement.current) {
      scrollClick.current.style.transform = `translateX(-500px)`;
      scrollElement.current.scrollLeft = 500;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (element.current && scroll > window.innerHeight) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="bg-[#161616]">
      <div
        ref={element}
        className="flex py-[42px] px-[192px] max-lg:flex-col max-lg:px-[40px]"
      >
        <div
          className={`w-1/3 px-2 max-lg:w-full ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10%]"
          }`}
          style={{ transition: "0.9s" }}
        >
          <video autoPlay playsInline loop muted className="w-full">
            <source
              src={
                "https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/homepage/fc24-haaland-goal-1x1.mp4"
              }
              type="video/mp4"
              className="w-full"
            />
          </video>
          <div className="w-full p-6 text-center text-[#FFF]">
            <h1 className="text-[24px] font-bold">V IS FOR VOLUMETRIC</h1>
            <p className="mt-2 text-[18px]">
              HyperMotionV uses volumetric data from more than 180 top-tier
              matches from competitions like the UEFA Men’s and Women’s
              Champions League, Premier League, and LaLiga EA SPORTS to recreate
              authentic motion.
            </p>
          </div>
        </div>
        <div
          className={`w-1/3 px-2 max-lg:w-full ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10%]"
          }`}
          style={{ transition: "1.4s" }}
        >
          <video autoPlay playsInline loop muted className="w-full">
            <source
              src="https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/homepage/fc24-playstyles-1x1.mp4"
              type="video/mp4"
              className="w-full"
            />
          </video>
          <div className="w-full p-6 text-center text-[#FFF]">
            <h1 className="text-[24px] font-bold">PLAY WITH STYLE</h1>
            <p className="mt-2 text-[18px]">
              PlayStyles optimised by Opta take players beyond their overall
              ratings with true-to-life behaviors and authentic abilities that
              make their way of playing more personal and unique.
            </p>
          </div>
        </div>
        <div
          className={`w-1/3 px-2 max-lg:w-full ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10%]"
          }`}
          style={{ transition: "1.8s" }}
        >
          <video autoPlay playsInline loop muted className="w-full">
            <source
              src="https://media.contentapi.ea.com/content/dam/ea/fc/fc-24/common/gameplay/videos/frostbite.mp4"
              type="video/mp4"
              className="w-full"
            />
          </video>
          <div className="w-full p-6 text-center text-[#FFF]">
            <h1 className="text-[24px] font-bold">
              EXPERIENCE FROSTBITE™ FOOTBALL
            </h1>
            <p className="mt-2 text-[18px]">
              From realistic SAPIEN player models to the ripple of your
              favourite club’s kit, the revolutionised Frostbite™ Engine dials
              up the detail to immerse you in every moment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          className="text-[18px] py-4 px-6 text-white"
          before="before:border before:border-white"
        >
          Explore Gameplay Features
        </Button>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-white font-bold text-[44px] uppercase">
          More Game Modes
        </h1>
        <Section className="block overflow-hidden">
          <motion.div
            ref={scrollClick}
            style={{ translateX: transform }}
            className="w-[2000px] py-4 flex justify-center"
          >
            {Lists.map((item, index: number) => (
              <div key={index} className="w-full mx-4 p-6 bg-white">
                <h1 className="text-[24px] font-bold uppercase">{item.name}</h1>
                <Button
                  className="mt-4 py-4 px-6 text-[18px] font-semibold"
                  before="before:bg-green before:text-black"
                >
                  <p className="">{item.button}</p>
                </Button>
              </div>
            ))}
          </motion.div>
        </Section>
        <div className="relative py-10">
          <div
            ref={scrollElement}
            id="scroll"
            className="relative top-2 left-2 w-[200px] mx-auto h-4 overflow-x-scroll"
          >
            {Lists.map((item, index: number) => (
              <div key={index} className="w-[1000px] mx-4 p-6 bg-white">
                <h1 className="text-[24px] font-bold uppercase">{item.name}</h1>
                <Button
                  className="mt-4 py-4 px-6 text-[18px] font-semibold"
                  before="before:bg-green before:text-black"
                >
                  <p className="">{item.button}</p>
                </Button>
              </div>
            ))}
          </div>
          <div className="w-[300px] mx-auto relative flex items-center">
            <div
              onClick={handleScrollLeft}
              className="absolute left-0  flex items-center justify-center w-[50px] h-[50px] border-2 border-white rounded-[100%] cursor-pointer"
            >
              <ArrowBackIosRoundedIcon style={{ color: "white" }} />
            </div>
            <div
              onClick={handleScrollRight}
              className="absolute right-0  flex items-center justify-center w-[50px] h-[50px] border-2 border-white rounded-[100%] cursor-pointer"
            >
              <ArrowForwardIosRoundedIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePlay;
