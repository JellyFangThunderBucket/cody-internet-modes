// ==UserScript==
// @name         Cody Internet Modes
// @namespace    jellyfangthunderbucket
// @version      1.0
// @description  One button. Four worlds. Pancakes, Watchtower, Campfire, and Flight Deck.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  const modes = [
    {
      name: "PANCAKES",
      icon: "🥞",
      bg: "#f8f1e4",
      text: "#2d241a",
      link: "#b36b00",
      button: "#f0b34f",
      wisdom: "Excellent choice."
    },
    {
      name: "WATCHTOWER",
      icon: "⚔️",
      bg: "#07111f",
      text: "#f4c978",
      link: "#79b8ff",
      button: "#1f3b5b",
      wisdom: "Stand above the noise."
    },
    {
      name: "CAMPFIRE",
      icon: "🔥",
      bg: "#21130d",
      text: "#ffe6c0",
      link: "#ffb86b",
      button: "#8a3f1d",
      wisdom: "Pull up a chair."
    },
    {
      name: "FLIGHT DECK",
      icon: "✈️",
      bg: "#081018",
      text: "#d7edf7",
      link: "#ffc857",
      button: "#26384a",
      wisdom: "Proceed."
    }
  ];

  let currentMode = -1;

  const button = document.createElement("button");
  button.textContent = "🥞 PANCAKES";

  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "999999999",
    padding: "12px 18px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "900",
    background: "#f0b34f",
    color: "#20140d",
    boxShadow: "0 4px 14px rgba(0,0,0,.35)"
  });

  function showWisdom(text) {
    const note = document.createElement("div");
    note.textContent = text;

    Object.assign(note.style, {
      position: "fixed",
      bottom: "78px",
      right: "20px",
      zIndex: "999999999",
      background: "rgba(0,0,0,.78)",
      color: "#fff3df",
      padding: "10px 14px",
      borderRadius: "14px",
      fontSize: "14px",
      fontWeight: "700",
      boxShadow: "0 4px 14px rgba(0,0,0,.35)"
    });

    document.body.appendChild(note);

    setTimeout(() => {
      note.remove();
    }, 1800);
  }

  function applyMode(mode) {
    document.body.style.background = mode.bg;
    document.body.style.color = mode.text;
    document.body.style.lineHeight = "1.75";

    document.querySelectorAll("p, li, span, div, article, main, section").forEach(el => {
      el.style.color = mode.text;
      el.style.lineHeight = "1.75";
    });

    document.querySelectorAll("a").forEach(link => {
      link.style.color = mode.link;
    });

    button.textContent = `${mode.icon} ${mode.name}`;
    button.style.background = mode.button;
    button.style.color = mode.name === "PANCAKES" ? "#20140d" : "#fff3df";

    showWisdom(mode.wisdom);
  }

  button.onclick = function () {
    currentMode = (currentMode + 1) % modes.length;
    applyMode(modes[currentMode]);
  };

  document.body.appendChild(button);
})();
