import React from "react";

type pageProps = {
  children: React.ReactNode;
};
export default function ContentWrapper({ children }: pageProps) {
  return <div className="px-20">{children}</div>;
}
