import { renderHomePage, renderNonChangeableElements } from "./initial-page";
import { renderMenu } from "./menu-page";
import { renderContacts } from "./contact-page";
// Load css with webpack
import "./style.css";

const divContent = document.body.querySelector("#content");
// Render initial page
renderNonChangeableElements();
renderHomePage(divContent);

function makeCurrentTabUnckickable(firstTab, secondTab, thirdTab) {
  homeTab.disabled = firstTab;
  menuTab.disabled = secondTab;
  contactTab.disabled = thirdTab;
}

const homeTab = document.querySelector(".Home-btn");
homeTab.addEventListener("click", () => {
  divContent.replaceChildren();
  renderHomePage(divContent);
  makeCurrentTabUnckickable(true, false, false);
});

const menuTab = document.querySelector(".Menu-btn");
menuTab.addEventListener("click", () => {
  divContent.replaceChildren();
  renderMenu(divContent);
  makeCurrentTabUnckickable(false, true, false);
});

const contactTab = document.querySelector(".Contact-btn");
contactTab.addEventListener("click", () => {
  divContent.replaceChildren();
  renderContacts(divContent);
  makeCurrentTabUnckickable(false, false, true);
});

