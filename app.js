// imports all javascript code. Included in every html file
import effects from "./resources/js/effects.js";
import layout from "./resources/js/layout.js";


var landingTexts = document.getElementsByClassName("landingText");
for (const element of landingTexts) {
    effects.typeWriter(element);
};