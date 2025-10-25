"use client"

import { ParallaxProvider } from "react-scroll-parallax";

export default function ParallaxProviderCliient({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}
