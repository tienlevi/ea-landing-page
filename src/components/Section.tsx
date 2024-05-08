import React, { ReactNode } from "react";

interface Props {
  className: any;
  children: any;
}

function Section({ className, children }: Props) {
  return (
    <section
      className={`max-w-[1200px] mx-auto ${className} max-lg:max-w-screen-lg max-md:max-w-screen-md`}
    >
      {children}
    </section>
  );
}

export default Section;
