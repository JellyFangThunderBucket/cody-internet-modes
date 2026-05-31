// ==UserScript==
// @name         Pancake Mode
// @namespace    jellyfangthunderbucket
// @version      1.0
// @description  Makes the internet warmer, calmer, and significantly more pancake.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {

    const button = document.createElement("button");

    button.textContent = "🥞 PANCAKES";

    Object.assign(button.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "999999",
        padding: "12px 18px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        background: "#f0b34f",
        color: "#2b1a0a",
        boxShadow: "0 4px 12px rgba(0,0,0,.25)"
    });

    let pancakes = false;

    button.onclick = function () {

        pancakes = !pancakes;

        document.body.style.background =
            pancakes ? "#f8f1e4" : "";

        document.body.style.color =
            pancakes ? "#2d241a" : "";

        document.body.style.lineHeight =
            pancakes ? "1.8" : "";

        document.querySelectorAll(
            "p, li, span, div, article"
        ).forEach(el => {

            el.style.lineHeight =
                pancakes ? "1.8" : "";

            el.style.color =
                pancakes ? "#2d241a" : "";
        });

        document.querySelectorAll("a").forEach(link => {
            link.style.color =
                pancakes ? "#b36b00" : "";
        });

        button.textContent =
            pancakes
                ? "🥞 PANCAKES: ON"
                : "🥞 PANCAKES";
    };

    document.body.appendChild(button);

})();
