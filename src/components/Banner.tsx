import Image from "next/image";
import React from "react";

interface Props {
  src: any;
}

function Banner({ src }: Props) {
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt=""
        className="relative w-full h-[450px] object-cover"
      />
    </div>
  );
}

export default Banner;
