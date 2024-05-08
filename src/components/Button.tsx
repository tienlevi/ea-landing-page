import React from "react";

interface Props {
  before?: string;
  className: string;
  children: any;
}

function Button({ before, className, children }: Props) {
  return (
    <button
      className={`relative rounded-[35px] ${className} z-40 before:content-[''] before:absolute ${before} before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-10] before:rounded-[35px] before:duration-100 hover:before:top-[-3px] hover:before:left-[-3px] hover:before:right-[-3px] hover:before:bottom-[-3px]`}
    >
      {children}
    </button>
  );
}

export default Button;
