import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Youtube",
    url: "https://www.youtube.com/@danielmkrv",
    handle: "@Danielmkrv",
  },
  {
    id: 2,
    name: "Contact Me",
    url: "mailto:danielmakarov.dev@gmail.com", // Use mailto: protocol for email
    handle: "danielmakarov.dev@gmail.com",
  },
];


const title = "Vexlar";
const description =
  "Vexlar is a AI dubber that lets users dub their videos into any language with lip sync and realistic voices";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    siteName: "Vexlar",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
