import { jsx, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { Routes, Route } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { StaticRouter } from "react-router-dom/server.mjs";
const useCheckIsAndroid = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  useEffect(() => {
    const checkIsAndroid = () => {
      const windowWidth = window.innerWidth;
      const isAndroidDevice = windowWidth < 768;
      setIsAndroid(isAndroidDevice);
    };
    checkIsAndroid();
    window.addEventListener("resize", checkIsAndroid);
    return () => {
      window.removeEventListener("resize", checkIsAndroid);
    };
  }, []);
  return {
    isAndroid
  };
};
const bktechBackdrop = "/assets/bktech-backdrop-uQOv7uJx.png";
const BackdropHero = () => {
  const { isAndroid } = useCheckIsAndroid();
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: bktechBackdrop,
      className: "absolute z-0",
      style: {
        left: `${isAndroid ? "-20vw" : "-15vw"}`,
        top: `${isAndroid ? "50vh" : "20vh"}`,
        width: `${isAndroid ? "250px" : "450px"}`
      }
    }
  );
};
const BackdropNav = () => {
  const { isAndroid } = useCheckIsAndroid();
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: bktechBackdrop,
      className: "absolute z-0",
      style: {
        right: `${isAndroid ? "-20vw" : "-10vw"}`,
        top: `${isAndroid ? "-4%" : "-15%"}`,
        width: `${isAndroid ? "250px" : "500px"}`
      }
    }
  );
};
const avatar3d = "/assets/avatar-qgfpCN2p.png";
const linkedin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMA32AgQO9woIAQsJ+/MJDPUOjyeNwAAALISURBVHja7d3bcqMwEEXRbt24Y5///9nJZCqpOCNhsJ24JZ/16qddFJQRiBYiIiIiIiIiIiIyLqRRI57jNKZFHsPNeDJ1cr+gMECD3GmFEb3cZYIZUyMdd5X0MGWVGwUYE+Q2Jq5XX6ncxMEc18YBAWa5wQKDghyXYFCS40YYNMpxJxikchwsiq2EgCF58+pCCKlTXGE6JPaDfAgdNlkOWQf5alFsMByS5JthRJndECf/61BkNiRJzowSqyGTZPmIAqMh6p9+T/yYkFUKhog8oyH++csUDwmZDaxTPCRklbKILJshzsDdy0NCgoH7yR8P6ZBlM+QsZTOybIakVs6RSYoG5NkMiVJ0Rp7NEISnn+sPCpmlwKPAaAjC0QNiNUSHgw8grIZgkgyvKDEbgulYh90QnLxcChFlhkO+vU/hO2yxHALousi7IYzYZjvkTZzHaVRcZT5kL4YwhCHbGMIQhmxjSGUh+iZWHhIn5z/+erpOfzkkuqyES5PL6vBpDnJp6fQ3Q3TfIoqTLPcZ6rM/a2UhpyAFTmsKWaXMd9WExCCb+kpC1MsVi9YQol6u8lpByCI7+Gg+pJddgvWQRXZKxkP2G1sJGWIjIZJaCRFtJSS1EjLERkKkryEkpHXqz162BPMhQx/xz+xkQzQekmLmOV5OZzukxwVdpMSZDunxTfRSsFgOcdl3EPIGyyF6ZH93tBvikBGHUrXdkBk5rrqQAVlTdSEBWafqQs7I0upCHEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDKkxBJqHS1GzIvI0r5J9iG3tDGXIS4ZEWNTGjAjg9MojCZoZEmFusM1fi5QY+BjmAfrao23sXbf01cc/2Rn0tm/cm4Gv+O7SiTRR8t7RwLi3lYMdP7mnp8xOHmNJ4wnPEXVMQYiIiIiIiIiIiMi2P1ioNasCUCqCAAAAAElFTkSuQmCC";
const github = "data:image/png;base64,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";
const medium = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAANlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3dmhyAAAAEXRSTlMAIN9AEL+AYO9w0J9QkDCwoIhxeQAAAAQKSURBVHja7MExAQAAAMIg+6c2w35gAAAAAAAAAAAAQHL2y23FcRgIorqrZfky9f8/uywsiCXtsStJMwrMeTQOdqmqq2NfSz9CwF9CyEdZo/s4YskChWVbk/sUUuyCb8jVuw8gboJLcnWTEzPuEaa2JWbcJ5RZpyVmcIQpA5Y28IT58rUKnqIwlrfee/m/v2ewgzMlFcE/upmPPuB5pLkbNMHASkoUUPDxSp33kafhVY50oWN59HHX72zP76eC11kSo+NciQ+EWQY6gPCdkq/bLREAYDHQwXhCPyI/3FnHzJnr4JV4nNFUQwBJjqXifXSnE3CG+JO3WR2JF7yRQpyVGq48rhvsQYJIGDJ+oWWQzNYX3ot4Nrz55NZqsAgZMmkIEPVz7QYDQtHYNjl0zcERHKDhw5Whok1DUi5TzWsZLk94GDFgCjjAhEiOYdZ3c+NXuqklCy7xatS75QrhLfG4pqmig2X18pZU5n4AAyEmxIrIFaMk1T1vWFm8JUIIj8rVazLsGDtgxx029WzrvVGHJYXzPY8apft3gyWB+1Mq6jttdqPOj/uCW3itGA53hZ5dk2zhHqs2tplYImZk7ryalpLw4501eitSH/sCXgisWSnjF/Wl3DUR1mxUNwZVyAQjAmTuy01dbZ7YImYIN4peFTLBrAOe2la7lvfdXSIwZ6eeEzUhcYLSAir1nPqcEA9Lxo5LLwqZoH2BjTqwNq+QTgkpzrlVWaoXrHjk54VULW/8Z+6vkD/kXO2OhCAMBPlSQMT3f9nLXu5MLlc2ThTb1fm7m5ihpYW2Q0ciz3Gt22z2svaHx8Kv3ITor0iIdu2PDB1RMkmEvYbygrnk0BjX7rDQghlq55pezVz8YhWPXazkXHXrsasuf33usuKDbexCrnKQI4mIKNBp6Cy0ULF0ZGyEbohY5vV0yVRAhW4mqhxwEVtCW6FgCavQbQV+3zqp0cPvWx5LWI78sxfQDNVYwvJ0M5S/Pb10aE+z5EQDTlI1BwaYt/sAnuocbT6luE0SwDvcROaEyD7mNKBBRZPBelF7YXsNnoHLFWk/9IAWaYWBj2NbwBMzHLRoszMNZ2qatJU2Lmt2WJAal33kADPgXAcEcP7ASDlb5MrwN0wjMmiFoTDLLlJLdsEqhJlxB9aNjBBYpUl49ck3zk2DULHYtJu63wzCxiTqU+R78fuHhwsqz2BST5O46jDZK7XsaMXD1qZfCZKB79qb0/CHulUbpAjzo965WHWj4ozqhwAbBV9b41NKc7CqK3RdcTiRrwnpiD+SIBSQf41iH3h5Ibhb0PiJLp+6N/4h1/Eti0m6Me72UNgvSvbJxe3ptjSH8nkkvtqDAxIAAAAAQf9ftyNQAQAAAAAAAAAA4C4zyv7xvgGe+QAAAABJRU5ErkJggg==";
const HeroSectionMobile = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-28 text-darkBlue items-center justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-lg mb-1", children: /* @__PURE__ */ jsx(
      Typewriter,
      {
        options: {
          strings: ["Hello, I'm", "Halo, perkenalkan saya"],
          autoStart: true,
          loop: true
        }
      }
    ) }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold mb-4", children: "Ari Angga Nugraha" }),
    /* @__PURE__ */ jsx("img", { src: avatar3d, width: 200, alt: "avatar", className: "mb-8" }),
    /* @__PURE__ */ jsx("h6", { className: "text-md mb-5 font-semibold", children: "Software Engineer at Tokopedia" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-7 text-xs text-center px-14", children: [
      "I shape ideas into compelling user interfaces, seamlessly blending code and ",
      /* @__PURE__ */ jsx("br", {}),
      "creativity to redefine the digital landscape."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 z-10", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/nugrahaa878/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: linkedin, width: 40 }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: github, width: 40 }) }),
      /* @__PURE__ */ jsx("a", { href: "https://medium.com/@nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: medium, width: 40 }) })
    ] })
  ] });
};
const HomeMobileView = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-screen h-screen overflow-x-hidden overflo relative", children: [
    /* @__PURE__ */ jsx(BackdropNav, {}),
    /* @__PURE__ */ jsx(BackdropHero, {}),
    /* @__PURE__ */ jsx(HeroSectionMobile, {})
  ] });
};
const Button = ({ text, handleClick }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "border-2 border-black px-4 py-2 rounded-lg hover:bg-darkBlue hover:text-white  z-10 duration-300 ease-in-out",
      children: /* @__PURE__ */ jsx("p", { children: text })
    }
  );
};
const Navbar = () => {
  const linkedInUrl = "https://www.linkedin.com/in/nugrahaa878/";
  const cvLink = "https://drive.google.com/file/d/19uxkHiwbusjfcXJANYVxX0KLdGCKp1iY/view?usp=sharing";
  const handleRedirectLink = (url) => {
    window.open(url);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full pt-10 pr-24 align-middle", children: [
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-16 items-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            const element = document.getElementById("articles");
            element == null ? void 0 : element.scrollIntoView({ behavior: "smooth" });
          },
          children: /* @__PURE__ */ jsx("h3", { children: "Article" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            const element = document.getElementById("projects");
            element == null ? void 0 : element.scrollIntoView({ behavior: "smooth" });
          },
          children: /* @__PURE__ */ jsx("h3", { children: "Projects" })
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "#", onClick: () => handleRedirectLink(linkedInUrl), children: /* @__PURE__ */ jsx("h3", { children: "Experience" }) }),
      /* @__PURE__ */ jsx("a", { href: "/#", children: /* @__PURE__ */ jsx("h3", { children: "Contact" }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          handleClick: () => {
            handleRedirectLink(cvLink);
          },
          text: "Resume"
        }
      )
    ] })
  ] });
};
const HeroSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex px-48 mb-40 mt-40 text-darkBlue items-center justify-center gap-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col ", children: [
      /* @__PURE__ */ jsx("div", { className: "text-2xl mb-3", children: /* @__PURE__ */ jsx(
        Typewriter,
        {
          options: {
            strings: ["Hello, I'm", "Halo, perkenalkan saya"],
            autoStart: true,
            loop: true
          }
        }
      ) }),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl font-semibold mb-4", children: "Ari Angga Nugraha" }),
      /* @__PURE__ */ jsx("h6", { className: "text-2xl mb-8 font-semibold", children: "Software Engineer at Tokopedia" }),
      /* @__PURE__ */ jsxs("p", { className: "mb-7", children: [
        "I shape ideas into compelling user interfaces, seamlessly blending code and ",
        /* @__PURE__ */ jsx("br", {}),
        "creativity to redefine the digital landscape."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/nugrahaa878/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: linkedin, width: 40 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://github.com/nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: github, width: 40 }) }),
        /* @__PURE__ */ jsx("a", { href: "https://medium.com/@nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: medium, width: 40 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: avatar3d, width: 270, alt: "avatar" })
  ] });
};
const LIST_POST = [
  {
    content: "The development of website is progressing rapidly from years to years. It started with website that only had static content, and now website can have dynamic and progressive content...",
    date: "19 July 2023",
    imgLink: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YbpTBONRFsZI-KWxkB6s-w.png",
    section: "Web Development",
    title: "Web Rendering Wars: CSR vs SSR",
    url: "https://medium.com/@nugrahaa878/web-rendering-wars-csr-vs-ssr-84ae3e903ada"
  },
  {
    content: "Halo teman teman semua, kembali lagi ke pembahasan kita tentang dunia Software Engineering. Pada kesempatan kali ini kita akan membahas tentang Clean Code. Jadi apa itu Clean Code? Apa yang harus dibersihkan?...",
    date: "5 April 2021",
    imgLink: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cPANVdAfM1dj24thKs6h4w.jpeg",
    section: "Software Engineering",
    title: "Kenapa Harus Clean Code?",
    url: "https://medium.com/@ari-angga/kenapa-harus-clean-code-c3e318aa48e9"
  }
];
const LIST_PROJECTS = [
  {
    details: "Logbook App for the Faculty of Medicine, Universitas Indonesia. For faster development, I've integrated some features as Web Views. For the Flutter side, I'm utilizing Cubit for state management and implementing separation of concerns for improved readability and maintainability. On the web side, we are using React with Typescript, implementing React Context for state management, and utilizing the Chakra-UI component library.",
    imgUrl: "https://i.ibb.co.com/m98zxp7/logbook-logo.png",
    techStack: ["Flutter", "React", "Typescript", "Cubit"],
    title: "Logbook Anestesi UI",
    playStore: "play.google.com/store/apps/details?id=com.mobile.logbook_app",
    webLink: "https://anestesi-ui.id/"
  },
  {
    details: "In this project, I have demonstrated proficiency in implementing end-to-end CI/CD processes from scratch and integrating them seamlessly with cloud services such as Google Cloud Platform (GCP). Ive created and set up my own GitHub workflow file to build the Vite project. Afterward, I integrated it with Cloud Run on GCP so that any changes in my repository will trigger a build and push to Cloud Run, updating my website automatically.",
    imgUrl: "https://arinugraha.dev/src/assets/avatar.png",
    techStack: ["GCP", "Cloud Run", "Typescript", "Docker"],
    title: "Portfolio Website",
    webLink: "https://arinugraha.dev/"
  }
];
const ArticleItem = ({ post }) => {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: post.url,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "flex items-center gap-16",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("p", { className: "italic mb-1", children: [
            post.section,
            ", ",
            post.date
          ] }),
          /* @__PURE__ */ jsx("h6", { className: "text-xl font-semibold mb-3", children: post.title }),
          /* @__PURE__ */ jsx("p", { children: post.content })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "min-w-44 w-60", children: /* @__PURE__ */ jsx("img", { src: post.imgLink, alt: `Ilustrasi-${post.title}` }) })
      ]
    }
  );
};
const ArticleSection = () => {
  const mediumLink = "https://ari-angga.medium.com/";
  return /* @__PURE__ */ jsxs("div", { className: "px-48 mb-40 pt-14", id: "articles", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-center", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-2xl font-semibold", children: "Recently Post" }),
      /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-gray-900 w-64 rounded-sm" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10 mt-7 ", children: LIST_POST.map((post) => /* @__PURE__ */ jsx(ArticleItem, { post }, `${post.title}-${post.date}`)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(
      Button,
      {
        text: "See More",
        handleClick: () => {
          window.open(mediumLink, "_blank");
        }
      }
    ) })
  ] });
};
const playStoreImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU7SURBVHgBzdlpbBRVAAfw/5uZvY8uFkI1BkIMKJE0aIQggmkJcpRwWCgBNUTkClEBPxgNIdIIIkqjkICG5UMNBKS0oBwtAZG0FLGtQDl62AIRq4ECbaXbbrvbzszzvenhtule7W7XfzLt7M686a/zztkl6EziGWoRjEVOrzlzEQhaBdWcSc3jtlSMW9mA/0FI186L52geKJ2t6IvQZnGyd1S2SXVEceweWT99++mUFC9iGA2adoSKd4agle3qAIqeWB7jXVEd9nHZhM+OsBIUMYgG5dUuCWj+720K2VAA2XQAlMjdpxLV9guhjk/SJkr56SRdxSDGD9QflheQZEot2VCMmysn7biFQUoAqH9sxyF9E6HWvZLbsetGcvrfiC0UgbH8AtRYQ2A/INvGflH13IomxA4aHNtxiumyqA7dZpj4+qkr5KV2xAaKTux5hj3kHwtJJap0lsgjNpdP3lSC2EA7ohguot2UGQDLI7YRxZ5jaE/8sHTKinuIBZQnNCwLFZoEOmTbMHfizvzk5R4MNpSnoxnkMKw76LmE6msojJ+2PxqTfTtlnQv9SL+hCBPL/5QA6w2i2NKHthhP5ienywgjAgYQyTsNUitbw1BLCGdTNiE3JSrig5yH1oZDz5ekj0cYGRCUpwO7mGGlEEsoAiWP05ZKP11ylZn30nIkhFJqwFAeyZvEsG+FjF0qVuEjw68mG2lZzV5epBV4lxbBjmhDeSRvMiRPWlAsR67XXYPUvTLDM6xV7IYV5+hNzKGUr+CiCNWwnpkBsYvFWxrSTvpY2hJMYJoTqMD3DJyIaEK1tZVnltYMel96iViNTfrivpE9PQvZz2u0DF/T67D4Hoh4eDPQu1drl+fj3ztSOTbqS3yrO1jY4hcbWAEnognlEdte1rCrUI4NutJwkL5JY21WM2qNSWysNbe5+zVhBMyMqiIsUWogTejnwwCByP5PbVIKdfALOzOrcrGyaA9crDsTj4rhU+sRdkScIalQ+G5Uqv7VO+c1pEBVPiGh8aYdDwrjw7oGG6Sy8QJSu15G9I4S1qBeq87Dqi5kVzqxUAmGJ9XB73MsgZdthTDjc5KC876HIgb1i/TFltsgGlUMndTQG8u7TAXbdrGq3tfX9SMC5cgpf+T7R/pgG67EabvdWIL70OM79nsrmYcWf0UHDNWQdwuwrnBHYGQvrGqRPPHj68+KOuV9Mhc1wYoNqDNx5PTq03ivMCM0JIsqiqpHbz1eVD11qpSqzA8FOSBoF3Jl8TfskS74GpgSAo9kKqmNHznnh8kLF80/fPQywki/qp4j55Yfw5tXM0NCeiVT9cNho7689/TYw8syMtzI/hnhJmxo150MBSlL+sY665O7VeLImH74x8dALvqbsKAcObPqFJaX7A2IlEVdu8do2+eyDN+SnJ1XiwgkLGgwpCoI1G2wn/gzfsz21INZxQSR+4gyZGjS7XP+kayjNJviKv+xJWy841iQu8a5JuIf6YQE5ci1l3b2iWQd5YHLEr/1XsLYA4udzkbgNKKRoNBZv5/s807Kor653pbwVV1cwsHU/VnVYFN0NCMFQy4t3d8DqYg6mVVzTjMxbJ92vOA6Bil+obMrT+Dt35w9kM1Gx4VHjlEfzMo6dhWDHA3aVNvsMtpZD6Udq+kZbNHri2w1WP9qiBuxdlp2bh5QGpMvG7Qp9Pa60V5B0J3l4+S8sqNYUfythmzTm+/XPTFi/YVnk0YzJB+tY4Lk6a562ah745XKAueim1kLZMnU5DKYnbeeGrNnmXM/WzQUINb5F2hYYA/0Azh2AAAAAElFTkSuQmCC";
const webImg = "data:image/png;base64,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";
const Tag = ({ text }) => {
  return /* @__PURE__ */ jsx("div", { className: "border-2 border-black px-4 py-1 rounded-xl hover:bg-darkBlue hover:text-white  z-10 duration-300 ease-in-out", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: text }) });
};
const ProjectItem = ({ project }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-8 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "min-w-44 w-60", children: /* @__PURE__ */ jsx("img", { src: project.imgUrl, alt: `Project-${project.title}` }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsx("h6", { className: "text-xl font-semibold", children: project.title }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-7", children: [
        project.playStore && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: playStoreImg, width: 15, alt: "playstore" }) }),
          /* @__PURE__ */ jsx("p", { className: "italic text-xs", children: project.playStore })
        ] }),
        project.appStore && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: playStoreImg, width: 15, alt: "appStore" }) }),
          /* @__PURE__ */ jsx("p", { className: "italic text-xs", children: project.playStore })
        ] }),
        project.webLink && /* @__PURE__ */ jsx("a", { href: project.webLink, target: "_blank", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: webImg, width: 15, alt: "web" }) }),
          /* @__PURE__ */ jsx("p", { className: "italic text-xs", children: project.webLink })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mt-2", children: project.details }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4 mt-2", children: project.techStack.map((tech) => /* @__PURE__ */ jsx(Tag, { text: tech }, tech)) })
    ] })
  ] });
};
const ProjectSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "px-48 mb-36", id: "projects", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-center", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-2xl font-semibold", children: "Projects" }),
      /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-gray-900 w-64 rounded-sm" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-10 mt-7 ", children: LIST_PROJECTS.map((project) => /* @__PURE__ */ jsx(ProjectItem, { project }, `${project.title}`)) })
  ] });
};
const HomeDesktopView = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-screen h-screen overflow-x-hidden overflo relative", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(BackdropNav, {}),
    /* @__PURE__ */ jsx(BackdropHero, {}),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(ArticleSection, {}),
    /* @__PURE__ */ jsx(ProjectSection, {})
  ] });
};
const Homepage = () => {
  const { isAndroid } = useCheckIsAndroid();
  useEffect(() => {
    console.log({ isAndroid });
  }, [isAndroid]);
  if (isAndroid)
    return /* @__PURE__ */ jsx(HomeMobileView, {});
  return /* @__PURE__ */ jsx(HomeDesktopView, {});
};
const Article = () => {
  return /* @__PURE__ */ jsx("div", { children: "This is Article" });
};
const MainRoutes = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Homepage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/article", element: /* @__PURE__ */ jsx(Article, {}) })
  ] });
};
function render({ path }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { basename: "/", location: path, children: /* @__PURE__ */ jsx(MainRoutes, {}) }) })
  );
  return { html };
}
export {
  render
};
