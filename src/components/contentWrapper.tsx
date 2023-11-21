import React from "react";

type pageProps = {
  children: React.ReactNode;
};
export default function ContentWrapper({ children }: pageProps) {
  return <div className="px-8 md:px-20 mt-[20px] md:mt-[70px]">{children}</div>;
}
