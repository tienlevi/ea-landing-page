import { ButtonItemHeader, ListSubMenu } from "@/interface";
import { FaPlaystation, FaXbox, FaDesktop, FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";

export const aboutSubMenu: ListSubMenu[] = [
  { name: "Authenticity" },
  { name: "Explore the Cover" },
  { name: "Dual Entitlement" },
  { name: "EA Play Membership" },
  { name: "Founder Status" },
  { name: "Soundtrack" },
];

export const featureSubMenu: ListSubMenu[] = [
  { name: "Features Overview" },
  { name: "Gameplay Features" },
];

export const ultimateTeamSubMenu: ListSubMenu[] = [
  { name: "About Ultimate Team" },
  { name: "PlayStyles" },
  { name: "Fantasy FC" },
  { name: "Future Stars" },
  { name: "Golazo" },
  { name: "Heroes" },
  { name: "ICONs" },
  { name: "Nike Mad Ready" },
  { name: "Road to the Knockouts" },
  { name: "Road to the Final" },
  { name: "FC Pro Live" },
  { name: "TOTS" },
  { name: "TOTY" },
  { name: "Companion App" },
];

export const NewCommunitySubMenu: ListSubMenu[] = [
  { name: "All News" },
  { name: "Pitch Notes" },
  { name: "Newsletter Sign Up" },
  { name: "Forum" },
  { name: "FC Data Collective" },
];

export const ButtonDropDown: ButtonItemHeader[] = [
  { name: "PlayStation®", icon: FaPlaystation },
  { name: "XBox", icon: FaXbox },
  { name: "The EA app for Windows", icon: FaDesktop },
  { name: "Steam", icon: FaSteam },
  { name: "Epic Games Store", icon: SiEpicgames },
  { name: "Nintendo Switch", icon: BsNintendoSwitch },
];
