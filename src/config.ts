export const SITE = {
  website: "https://ajthiesen.com/", 
  author: "Andrew Thiesen",
  profile: "https://ajthiesen.com/",
  desc: "Systems Architect, Machine Learning Engineer, and Cybersecurity Advocate.",
  title: "AJ. Thiesen",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true, 
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/ajthiesen/ajthiesen.com-v2/edit/main/src/content/blog/",
    appendFilePath: true,
  },
  lang: "en",
  dir: "ltr",
  timezone: "America/New_York",
  dynamicOgImage: false,
};

export const LOCALE = {
  lang: "en", 
  langTag: ["en-EN"], 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/ajthiesen",
    linkTitle: `AJ Thiesen on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:aj@ajthiesen.com",
    linkTitle: `Send an email`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    linkTitle: `AJ Thiesen on LinkedIn`,
    active: true,
  }
];
