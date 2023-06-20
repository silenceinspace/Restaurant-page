// first initial load page
import {
  renderTopSection,
  renderMiddleSection,
  renderFoofer,
} from "./initial-page";
// second menu page
import { renderMenu } from "./menu-page";
//third contacts page
import { renderContacts } from "./contact-page";
// load css with webpack
import "./style.css";

renderTopSection();
renderMiddleSection();
renderFoofer();

renderMenu();

renderContacts();

// Some things to try in the project!!!
// import images through webpack??
// import font through webpack
