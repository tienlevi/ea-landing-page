import { ListSubMenu } from "@/interface";
import React from "react";

interface Props {
  className: string;
  lists: ListSubMenu[];
}

function SubMenu({ className, lists }: Props) {
  return (
    <div className={`absolute top-[100%] pt-[10px] z-30 ${className}`}>
      <div className={`py-[10px] px-[35px] bg-[#000] rounded-[4px]`}>
        {lists.map((list: ListSubMenu, index: number) => (
          <p
            key={index}
            className="text-nowrap my-[10px] mr-[30px] text-[16px]"
          >
            {list.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SubMenu;
