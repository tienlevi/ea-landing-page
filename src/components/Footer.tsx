import React from "react";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Section from "./Section";
import LogoFooter from "../../public/asset/image/fc24-logo-footer.svg";
import RatingImage from "../../public/asset/image/fifa21-esrb-rating-e.svg";
import LogoGray from "../../public/asset/image/ea-1-1b-medallion-mediumgray.png";
import Seal from "../../public/asset/image/seal.svg";

function Footer() {
  //
  return (
    <>
      <div className="bg-[#252525] px-[168px] py-[18px] max-lg:px-[40px]">
        <Section className="">
          <div className="flex justify-between w-full pb-[47px] border-b-[1px] border-[#a3a3a3] max-lg:flex-col">
            <div className="pb-[50px]">
              <h1 className="font-mono text-[18px] text-white mb-[5px]">
                EA SPORTS FC™ 24
              </h1>
              <div className="flex">
                <p className="mt-[5px] mr-[48px] text-[#a3a3a3]">Home</p>
                <p className="mt-[5px] mr-[48px] text-[#a3a3a3]">News</p>
                <p className="mt-[5px] mr-[48px] text-[#a3a3a3]">Gameplay</p>
                <p className="mt-[5px] mr-[48px] text-[#a3a3a3]">Buy Now</p>
              </div>
            </div>
            <div className="">
              <h1 className="font-mono text-[18px] text-right text-white mb-[10px] max-lg:text-left">
                Follow us
              </h1>
              <div className="flex mt-[5px]">
                <div className="hover:scale-150 cursor-pointer duration-300">
                  <FaInstagram
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginLeft: 15,
                      marginRight: 15,
                      transition: "0.3s",
                    }}
                  />
                </div>
                <div className="hover:scale-150 cursor-pointer duration-300">
                  <FaYoutube
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginLeft: 15,
                      marginRight: 15,
                      transition: "0.3s",
                    }}
                  />
                </div>
                <div className="hover:scale-150 cursor-pointer duration-300">
                  <FaTiktok
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginLeft: 15,
                      marginRight: 15,
                      transition: "0.3s",
                    }}
                  />
                </div>
                <div className="hover:scale-150 cursor-pointer duration-300">
                  <FaXTwitter
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginLeft: 15,
                      marginRight: 15,
                      transition: "0.3s",
                    }}
                  />
                </div>
                <div className="hover:scale-150 cursor-pointer duration-300">
                  <FaFacebookF
                    style={{
                      color: "white",
                      fontSize: 25,
                      marginLeft: 15,
                      marginRight: 15,
                      transition: "0.3s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-[35px] max-lg:flex-col">
            <Image src={LogoFooter} alt="" width={90} height={90} />
            <Image src={RatingImage} alt="" className="max-lg:mt-6" />
          </div>
          <p className="text-[18px] text-[#a3a3a3] py-3 w-[70%]">
            † Conditions & restrictions apply. See
            https://www.ea.com/games/ea-sports-fc/fc-24/game-offer-and-disclaimers
            for details.
          </p>
        </Section>
      </div>
      <div className="bg-[#f3f3f3] py-[30px]">
        <Section className={``}>
          <div className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:flex-wrap">
            <Image
              src={LogoGray}
              alt=""
              width={50}
              height={50}
              className="max-lg:mx-8"
            />
            <ul className="flex max-lg:flex-wrap max-lg:mt-4">
              <li className="text-[16px] mx-8">Browse Games</li>
              <li className="text-[16px] mx-8">Latest News</li>
              <li className="text-[16px] mx-8">Help Center</li>
              <li className="text-[16px] mx-8">EA Forums</li>
              <li className="text-[16px] mx-8">About Us</li>
              <li className="text-[16px] mx-8">Careers</li>
            </ul>
            <button className="w-[190px] h-[48px] border border-[rgb(22,22,22)] rounded-[3px] max-lg:mx-8 max-lg:mt-4">
              Language
            </button>
          </div>
          <div className="flex justify-between max-lg:flex-col">
            <div className="mt-[40px] ml-[80px] flex flex-col items-start justify-center max-lg:ml-0">
              <div className="flex">
                <p className="text-[16px] mx-8">Legal & Privacy</p>
                <p className="text-[16px] mx-8">Online Service Updates</p>
                <p className="text-[16px] mx-8">User Agreement</p>
              </div>
              <p className="mx-8">
                Privacy & Cookie Policy (Your Privacy Rights)Cookie Preferences
                © 2024 Electronic Arts Inc.
              </p>
            </div>
            <div className="mt-[40px] max-lg:ml-[40px]">
              <Image src={Seal} alt="" />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Footer;
