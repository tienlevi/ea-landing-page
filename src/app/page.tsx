"use client";
import TeamOfTheYear from "./TeamOfTheYear";
import Ratings from "./Ratings";
import GamePlay from "./GamePlay";
import Unrivalled from "./Unrivalled";
import WelcomeClub from "./WelcomeClub";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

export default function Home() {
  const Header = dynamic(() => import("../components/Header"), { ssr: false });
  return (
    <div className="font-ea-font">
      <Header />
      <TeamOfTheYear />
      <Ratings />
      <GamePlay />
      <Unrivalled />
      <WelcomeClub />
      <Footer />
    </div>
  );
}
