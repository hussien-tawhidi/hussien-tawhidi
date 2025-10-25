import localFont from "next/font/local";

export const shabname = localFont({
  src: [
    {
      path: "../../fonts/shabname/Shabnam.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/shabname/Shabnam-light.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../fonts/shabname/Shabnam-medium.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/shabname/Shabnam-bold.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-shabname",
});
