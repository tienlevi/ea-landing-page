import { useReducer } from "react";
import Image from "next/image";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import logo from "../../public/asset/image/logo.svg";
import SlashIcon from "./SlashIcon";
import {
  aboutSubMenu,
  featureSubMenu,
  NewCommunitySubMenu,
  ultimateTeamSubMenu,
} from "@/constants";

interface Props {
  active: boolean;
  onToggle: () => void;
}

const initState = {
  items: [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ],
};

function reducer(state: any, action: any) {
  switch (action?.type) {
    case "Toggle":
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload.id
            ? { ...item, active: !item.active }
            : item
        ),
      };
    default:
      return state;
  }
}

function Sidebar({ active, onToggle }: Props) {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleToggle = (id: number, active: boolean) => {
    dispatch({ type: "Toggle", payload: { id: id, active: !active } });
  };

  return (
    <>
      <div
        className={`absolute ${
          active ? "left-0" : "left-[-50%]"
        }  top-0 bg-black w-[380px] h-screen duration-500 z-20`}
      >
        <div className="flex items-center justify-between bg-[#161616] py-[10px] w-full">
          <Image src={logo} alt="" className="mx-8 max-lg:mx-4" />
          <HighlightOffRoundedIcon
            style={{
              color: "white",
              fontSize: 40,
              paddingRight: 15,
              cursor: "pointer",
            }}
            onClick={onToggle}
          />
        </div>
        <div className="">
          <div className="group flex flex-col mx-[18px] text-[16px] text-white cursor-pointer">
            <div
              className={`flex justify-between py-[13px] border-b ${
                state.items[0].active
                  ? "border-[#07F468]"
                  : "border-[rgb(163,163,163)]"
              }`}
              onClick={() =>
                handleToggle(state.items[0].id, !state.items[0].active)
              }
            >
              <p className="group-hover:text-[#07F468]">About</p>
              <div>
                <SlashIcon
                  className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
                <SlashIcon
                  className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
              </div>
            </div>
            <div
              style={{ transition: "all 380ms ease-in-out" }}
              className={`${
                state.items[0].active ? "opacity-100 h-full" : "opacity-0 h-0"
              } overflow-hidden visible`}
            >
              <div className="w-full leading-6">
                {aboutSubMenu.map((item, index: number) => (
                  <div
                    className={`py-[14px] pl-[13px] text-[#a3a3a3] border-b ${
                      index === 5
                        ? "border-[#07F468]"
                        : "border-[rgb(163,163,163)]"
                    } hover:text-[#07F468]`}
                    key={index}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="group flex flex-col mx-[18px] text-[16px] text-white cursor-pointer">
            <div
              className={`flex justify-between py-[13px] border-b ${
                state.items[1].active
                  ? "border-[#07F468]"
                  : "border-[rgb(163,163,163)]"
              }`}
              onClick={() =>
                handleToggle(state.items[1].id, !state.items[1].active)
              }
            >
              <p className="group-hover:text-[#07F468]">Features</p>
              <div>
                <SlashIcon
                  className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
                <SlashIcon
                  className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
              </div>
            </div>
            <div
              style={{ transition: "all 380ms ease-in-out" }}
              className={`${
                state.items[1].active ? "opacity-100 h-full" : "opacity-0 h-0"
              } overflow-hidden visible`}
            >
              <div className="w-full leading-6">
                {featureSubMenu.map((item, index: number) => (
                  <div
                    className={`py-[14px] pl-[13px] text-[#a3a3a3] border-b ${
                      index === 1
                        ? "border-[#07F468]"
                        : "border-[rgb(163,163,163)]"
                    } hover:text-[#07F468]`}
                    key={index}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="group flex flex-col mx-[18px] text-[16px] text-white cursor-pointer">
            <div
              className={`flex justify-between py-[13px] border-b ${
                state.items[2].active
                  ? "border-[#07F468]"
                  : "border-[rgb(163,163,163)]"
              }`}
              onClick={() =>
                handleToggle(state.items[2].id, !state.items[2].active)
              }
            >
              <p className="group-hover:text-[#07F468]">Ultimate Team</p>
              <div>
                <SlashIcon
                  className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
                <SlashIcon
                  className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
              </div>
            </div>
            <div
              style={{ transition: "all 380ms ease-in-out" }}
              className={`${
                state.items[2].active ? "opacity-100 h-full" : "opacity-0 h-0"
              } overflow-hidden visible`}
            >
              <div className="w-full leading-6">
                {ultimateTeamSubMenu.map((item, index: number) => (
                  <div
                    className={`py-[14px] pl-[13px] text-[#a3a3a3] border-b ${
                      index === 13
                        ? "border-[#07F468]"
                        : "border-[rgb(163,163,163)]"
                    } hover:text-[#07F468]`}
                    key={index}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="group flex flex-col mx-[18px] text-[16px] text-white cursor-pointer">
            <div
              className={`flex justify-between py-[13px] border-b border-[rgb(163,163,163)]
              `}
            >
              <p className="group-hover:text-[#07F468]">FC 24 Ratings</p>
              <div>
                <SlashIcon
                  className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
                <SlashIcon
                  className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
              </div>
            </div>
          </div>
          <div className="group flex flex-col mx-[18px] text-[16px] text-white cursor-pointer">
            <div
              className={`flex justify-between py-[13px] border-b ${
                state.items[3].active
                  ? "border-[#07F468]"
                  : "border-[rgb(163,163,163)]"
              }`}
              onClick={() =>
                handleToggle(state.items[3].id, !state.items[3].active)
              }
            >
              <p className="group-hover:text-[#07F468]">News & Community</p>
              <div>
                <SlashIcon
                  className="rotate-[45deg] group-hover:rotate-[-50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
                <SlashIcon
                  className="right-[10px] rotate-[-45deg] group-hover:rotate-[50deg] group-hover:text-[#07F468]"
                  style={{ transition: "0.3s" }}
                />
              </div>
            </div>
            <div
              style={{ transition: "all 380ms ease-in-out" }}
              className={`${
                state.items[3].active ? "opacity-100 h-full" : "opacity-0 h-0"
              } overflow-hidden visible`}
            >
              <div className="w-full leading-6">
                {NewCommunitySubMenu.map((item, index: number) => (
                  <div
                    className={`py-[14px] pl-[13px] text-[#a3a3a3] border-b ${
                      index === 4
                        ? "border-[#07F468]"
                        : "border-[rgb(163,163,163)]"
                    } hover:text-[#07F468]`}
                    key={index}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "block" : "hidden"
        } absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] w-full h-screen z-[-10]`}
      ></div>
    </>
  );
}

export default Sidebar;
