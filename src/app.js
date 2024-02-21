/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Me costo muchisimo!");
};

let generateExcuse = () => {
  let pronoun = ["the", "our", "a"];

  let adjective = [
    "abundant",
    "agile",
    "amiable",
    "brave",
    "bright",
    "calm",
    "charming",
    "clever",
    "cozy",
    "dazzling",
    "delightful",
    "elegant",
    "energetic",
    "enthusiastic",
    "friendly",
    "generous",
    "gentle",
    "happy",
    "harmonious",
    "honest",
    "joyful",
    "kind",
    "lively",
    "magnificent",
    "peaceful",
    "polite",
    "radiant",
    "serene",
    "sincere",
    "splendid",
    "tranquil",
    "vibrant",
    "wise",
    "witty",
    "zealous"
  ];

  let noun = [
    "HTML",
    "CSS",
    "javaScript",
    "framework",
    "server",
    "client",
    "browser",
    "database",
    "API",
    "backend",
    "frontend",
    "code",
    "markup",
    "script",
    "hosting",
    "domain",
    "URL",
    "HTTP",
    "CMS",
    "responsive Design",
    "SEO",
    "UI",
    "UX",
    "cookie",
    "cache",
    "DNS",
    "SSL",
    "authentication",
    "authorization",
    "session",
    "endpoint",
    "deployment",
    "version Control",
    "repository",
    "plugin"
  ];

  let extension = [
    ".com",
    ".net",
    ".org",
    ".edu",
    ".gov",
    ".info",
    ".biz",
    ".io",
    ".co",
    ".me",
    ".tv",
    ".tech",
    ".online",
    ".store",
    ".app",
    ".dev",
    ".website",
    ".xyz"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionIndex = Math.floor(Math.random() * extension.length);

  return (
    pronoun[pronounIndex] +
    adjective[adjectiveIndex] +
    noun[nounIndex] +
    extension[extensionIndex]
  );
};

