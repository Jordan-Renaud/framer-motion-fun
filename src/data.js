import easyRecipeCard from "./images/easy-recipes.png";
import weatherAppCard from "./images/weather-app.png";
import LaptopGirl from "./images/girl-with-laptop";

export const icons = [
  {
    id: "fa-facebook-square",
    link: "https://www.facebook.com/jordan.renaud3",
    title: "Facebook",
  },
  {
    id: "fa-instagram-square",
    link: "https://www.instagram.com/jordan__renaud/",
    title: "Instagram",
  },
  {
    id: "fa-twitter-square",
    link: "https://twitter.com/jordan_renaud",
    title: "Twitter",
  },
  {
    id: "fa-linkedin",
    link: "https://www.linkedin.com/in/jordan-renaud-064a8a167/",
    title: "LinkedIn",
  },
  {
    id: "fa-github-square",
    link: "https://github.com/Jordan-Renaud",
    title: "GitHub",
  },
];

//load back to front
export const rawCardData = [
  {
    front: {
      title: "Weather Project",
      content: (
        <img src={weatherAppCard} alt="screenshot of the weather website" />
      ),
    },
    back: {
      title: "Weather Project",
      content: [
        "Using: Vanilla JavaScript, HTML, CSS",
        "Design: Played with neumorphic design to give an apple-esk feel",
        "Learnt: API usage, manipulating the DOM, first project finished.",
      ],
      link: "https://weather-app-jrenaud.netlify.app/",
    },
  },
  {
    front: {
      title: "Component Based Recipes",
      content: (
        <img
          src={easyRecipeCard}
          alt="screenshot of the component based recipe card website"
        />
      ),
      link: "https://easy-recipes-jr.netlify.app/",
    },
    back: {
      title: "Component Based Recipes",
      content: [
        "Idea: Easily being able to swap out ingredients in a meal.",
        "Using: React, HTMl, CSS",
        "Design: Simple and clean, focusing on usability. No ads to distract the user.",
        "Learnt: React Hooks, multiple page application, APIs, CSS grid.",
      ],
    },
  },
  {
    front: { title: "", content: <LaptopGirl /> },
    back: {
      title: "me",
      content: ["New Zealander Abroad in London, HTML, CSS, React, JavaScript"],
      link: "#",
    },
  },
];
