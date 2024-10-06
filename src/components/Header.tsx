import { useEffect, useState } from "react";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SlashIcon from "./SlashIcon";
import SubMenu from "./SubMenu";
import logo from "../../public/asset/image/logo.svg";
import Sidebar from "./Sidebar";
import {
  aboutSubMenu,
  ButtonDropDown,
  featureSubMenu,
  NewCommunitySubMenu,
  ultimateTeamSubMenu,
} from "@/constants";
import { ButtonItemHeader } from "@/interface";
import Button from "./Button";

function Header() {
  const [isScroll, setIsScroll] = useState<boolean>(true);
  const [position, setPosition] = useState<number>(window.pageYOffset);
  const [toggle, setToggle] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;

      setIsScroll(position > scroll);
      setPosition(scroll);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const iconStyle = { color: isHover ? "#07F468" : "#a3a3a3", fontSize: 30 };
  return (
    <>
      <header
        className={`fixed ${
          isScroll ? "top-0" : "top-[-32px]"
        } flex items-center justify-end w-full h-8 bg-[#161616] duration-300 z-50`}
      >
        <PersonOutlineRoundedIcon
          style={{ color: "#a3a3a3", marginRight: 20 }}
        />
        <QuestionMarkRoundedIcon
          style={{ color: "#a3a3a3", marginRight: 20 }}
        />
      </header>
      <header
        className={`fixed ${
          isScroll ? "top-8" : "top-0"
        } flex items-center justify-between w-full h-[56px] px-8 bg-black duration-300 z-50`}
      >
        <div className="flex items-center">
          <div
            className="hidden cursor-pointer max-lg:block"
            onClick={handleToggle}
          >
            <MenuIcon
              style={iconStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <Sidebar active={toggle} onToggle={handleToggle} />
          <Image src={logo} alt="" className="mx-8 max-lg:mx-4" />
          <ul className="relative flex items-center text-white max-lg:hidden">
            <li className="relative flex mx-4 py-4 font-medium cursor-pointer group">
              <p className="group-hover:text-green">About</p>
              <SlashIcon
                className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SlashIcon
                className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SubMenu
                className="scale-y-0 origin-top opacity-0 visible duration-300 group-hover:opacity-100 group-hover:scale-y-100"
                lists={aboutSubMenu}
              />
            </li>
            <li className="relative flex mx-4 py-4 font-medium cursor-pointer group">
              <p className="group-hover:text-green">Features </p>
              <SlashIcon
                className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SlashIcon
                className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SubMenu
                className="scale-y-0 origin-top opacity-0 visible duration-300 group-hover:opacity-100 group-hover:scale-y-100"
                lists={featureSubMenu}
              />
            </li>
            <li className="relative flex mx-4 py-4 font-medium cursor-pointer group">
              <p className="group-hover:text-green">Ultimate Team</p>
              <SlashIcon
                className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SlashIcon
                className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SubMenu
                className="scale-y-0 origin-top opacity-0 visible duration-300 group-hover:opacity-100 group-hover:scale-y-100"
                lists={ultimateTeamSubMenu}
              />
            </li>
            <li className="relative flex mx-4 py-4 font-medium cursor-pointer group">
              <p className="group-hover:text-green">FC 24 Ratings</p>{" "}
            </li>
            <li className="relative flex mx-4 py-4 font-medium cursor-pointer group">
              <p className="group-hover:text-green">News & Community</p>
              <SlashIcon
                className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SlashIcon
                className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-green"
                style={{ transition: "0.3s" }}
              />
              <SubMenu
                className="scale-y-0 origin-top opacity-0 visible duration-300 group-hover:opacity-100 group-hover:scale-y-100"
                lists={NewCommunitySubMenu}
              />
            </li>
          </ul>
        </div>
        <button className="flex items-center justify-center w-[180px] h-[44px] text-[18px] font-semibold bg-green group rounded-[35px]">
          <div className="ml-4">
            <p>Buy Now</p>
          </div>
          <div className="mt-[-5px]">
            <SlashIcon
              className="rotate-[45deg] group-hover:rotate-[-50deg]"
              style={{ transition: "0.3s" }}
            />
            <SlashIcon
              className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg]"
              style={{ transition: "0.3s" }}
            />
          </div>
          <div
            className={`absolute top-[100%] right-[10px] pt-[10px] z-30 scale-y-0 origin-top opacity-0 visible duration-300 group-hover:opacity-100 group-hover:scale-y-100`}
          >
            <div
              className={`flex flex-col py-[10px] px-[20px] bg-[rgba(255,255,255,0.9)] rounded-[4px]`}
            >
              {ButtonDropDown.map((list: ButtonItemHeader, index: number) => (
                <>
                  <Button
                    key={index}
                    className="flex items-center justify-center my-2 py-4 px-6 text-black text-[16px]"
                    before="before:border-2 before:border-black group-hover:opacity-100 opacity-0 duration-300"
                  >
                    {list.name}
                    <div className="ml-2">
                      <list.icon />
                    </div>
                  </Button>
                </>
              ))}
            </div>
          </div>
        </button>
      </header>
    </>
  );
}

export default Header;
