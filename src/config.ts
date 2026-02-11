import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ajthiesen.com/", // Your actual domain
  author: "Andrew Thiesen",
  desc: "Systems Architect, Machine Learning Engineer, and Cybersecurity Advocate.",
  title: "AJ Thiesen",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, 
};

export const LOCALE = {
  lang: "en", // html lang code
  langTag: ["en-EN"], // BCP 47 Language Tags
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ajthiesen",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:aj@ajthiesen.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ajthiesen", // Update with your actual LinkedIn if you have one
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  }
];