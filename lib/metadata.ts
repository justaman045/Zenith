import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "{ Aman }",
  handle: "@justaman045",
  socialProfiles,
  email: "editingamer@gmail.com",
  website: "https://justaman045.vercel.app",
  jobTitle: "Systems Engineer",
  company: "Infosys Ltd.",
  availableForWork: true,
  location: {
    city: "Indore",
    media: "/noida.avif",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Building hackin’ cool digital products around the world 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  username: "justaman045",
  description: defaultDescription,
  email: defaultAuthor.email,
  siteRepo: "https://github.com/justaman045/Zenith",
  newsletterProvider: "convertkit",
  newsletterUrl: "https://athenabyaman.ck.page/newsletter",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: false,
  announcement: {
    buttonText: "announcement Headline",
    link: "https://projektnotify.vercel.app",
  },
  postsPerPage: 4,
  postsOnHomePage: 4,
  projectsOnHomePage: 3,
  instagramAccounts: ["lethal_astra", "justaman045", "1stay_Consistent", "shawmir26"],
};

export default siteMetadata;
