import { Post, Project } from "../types";

export const LIST_POST: Post[] = [
  {
    content:
      "The development of website is progressing rapidly from years to years. It started with website that only had static content, and now website can have dynamic and progressive content...",
    date: "19 July 2023",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YbpTBONRFsZI-KWxkB6s-w.png",
    section: "Web Development",
    title: "Web Rendering Wars: CSR vs SSR",
    url: "https://medium.com/@nugrahaa878/web-rendering-wars-csr-vs-ssr-84ae3e903ada",
  },
  {
    content:
      "Halo teman teman semua, kembali lagi ke pembahasan kita tentang dunia Software Engineering. Pada kesempatan kali ini kita akan membahas tentang Clean Code. Jadi apa itu Clean Code? Apa yang harus dibersihkan?...",
    date: "5 April 2021",
    imgLink:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cPANVdAfM1dj24thKs6h4w.jpeg",
    section: "Software Engineering",
    title: "Kenapa Harus Clean Code?",
    url: "https://medium.com/@ari-angga/kenapa-harus-clean-code-c3e318aa48e9",
  },
];

export const LIST_PROJECTS: Project[] = [
  {
    details:
      "Logbook App for the Faculty of Medicine, Universitas Indonesia. For faster development, I've integrated some features as Web Views. For the Flutter side, I'm utilizing Cubit for state management and implementing separation of concerns for improved readability and maintainability. On the web side, we are using React with Typescript, implementing React Context for state management, and utilizing the Chakra-UI component library.",
    imgUrl: "https://i.ibb.co.com/m98zxp7/logbook-logo.png",
    techStack: ["Flutter", "React", "Typescript", "Cubit"],
    title: "Logbook Anestesi UI",
    playStore: "play.google.com/store/apps/details?id=com.mobile.logbook_app",
    webLink: "https://anestesi-ui.id/",
  },
  {
    details:
      "In this project, I have demonstrated proficiency in implementing end-to-end CI/CD processes from scratch and integrating them seamlessly with cloud services such as Google Cloud Platform (GCP). Ive created and set up my own GitHub workflow file to build the Vite project. Afterward, I integrated it with Cloud Run on GCP so that any changes in my repository will trigger a build and push to Cloud Run, updating my website automatically.",
    imgUrl: "https://arinugraha.dev/src/assets/avatar.png",
    techStack: ["GCP", "Cloud Run", "Typescript", "Docker"],
    title: "Portfolio Website",
    webLink: "https://arinugraha.dev/",
  },
];
