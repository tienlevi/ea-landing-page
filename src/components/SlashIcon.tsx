import React from "react";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

interface Props {
  className: string;
  style?: any;
}

function SlashIcon({ className, style }: Props) {
  return (
    <HorizontalRuleRoundedIcon
      className={`relative mt-[3px] ${className}`}
      style={{ fontSize: 18, ...style }}
    />
  );
}

export default SlashIcon;
