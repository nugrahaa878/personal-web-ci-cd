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
      },
      alt: "backdrop-hero"
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
      },
      alt: "backdrop-nav"
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
    /* @__PURE__ */ jsx("h1", { className: "text-md mb-5 font-semibold", children: "Software Engineer at Tokopedia" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-7 text-xs text-center px-14", children: [
      "I shape ideas into compelling user interfaces, seamlessly blending code and ",
      /* @__PURE__ */ jsx("br", {}),
      "creativity to redefine the digital landscape."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 z-10", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/nugrahaa878/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: linkedin, width: 40, alt: "linkedin" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: github, width: 40, alt: "github" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://medium.com/@nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: medium, width: 40, alt: "medium" }) })
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
        /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/nugrahaa878/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: linkedin, width: 40, alt: "linkedin" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://github.com/nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: github, width: 40, alt: "github" }) }),
        /* @__PURE__ */ jsx("a", { href: "https://medium.com/@nugrahaa878", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: medium, width: 40, alt: "medium" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("img", { src: avatar3d, width: 270, alt: "avatar" })
  ] });
};
const HomeDesktopView = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-screen h-screen overflow-x-hidden overflo relative", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(BackdropNav, {}),
    /* @__PURE__ */ jsx(BackdropHero, {}),
    /* @__PURE__ */ jsx(HeroSection, {})
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
