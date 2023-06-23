export { renderMenu };
import imageOne from "../src/images/menu/beef borsch.jpg";
import imageTwo from "../src/images/menu/Vegeterian borsch.png";
import imageThree from "../src/images/menu/Kyiv cutlet.png";
import imageFour from "../src/images/menu/Holubtsi.png";
import imageFive from "../src/images/menu/Nalysnyky.png";
import imageSix from "../src/images/menu/Varenyky.png";
import imageSeven from "../src/images/menu/Deruns.png";
import imageEight from "../src/images/menu/Salo.png";
import imageNine from "../src/images/menu/Sweet varenyky.png";
import imageTen from "../src/images/menu/Cheesecakes.png";

function renderMenu(div) {
  // Create html elements in DOM
  const menuDiv = document.createElement("div");
  const currentPageTitleHeader = document.createElement("h1");
  const soupTitleHeader = document.createElement("h2");
  const mainCoursesTitleHeader = document.createElement("h2");
  const dessertsTitleHeader = document.createElement("h2");
  const soupDiv = document.createElement("div");
  const mainCoursesDiv = document.createElement("div");
  const dessertsDiv = document.createElement("div");

  // Add class names to elements in DOM
  menuDiv.classList.add("menu-section");
  soupDiv.classList.add("soups");
  mainCoursesDiv.classList.add("main-courses");
  dessertsDiv.classList.add("desserts");

  // Add text to elements in DOM
  currentPageTitleHeader.textContent = "Our menu";
  soupTitleHeader.textContent = "Soups";
  mainCoursesTitleHeader.textContent = "Ukrainian specialities";
  dessertsTitleHeader.textContent = "Desserts";

  // Append DOM elements other DOM elements
  div.append(menuDiv);
  menuDiv.append(
    currentPageTitleHeader,
    soupTitleHeader,
    soupDiv,
    mainCoursesTitleHeader,
    mainCoursesDiv,
    dessertsTitleHeader,
    dessertsDiv
  );

  // Create divs with soup options
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const para = document.createElement("p");
      const img = document.createElement("img");

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l";
          para.textContent = "Price - 99Czk";
          img.src = imageOne;
          img.alt = "Beef borsch";
          break;
        case 1:
          header.textContent = "Vegetarian borsch with mushroom 0.4l";
          para.textContent = "Price - 99Czk";
          img.src = imageTwo;
          img.alt = "Vegetarian borsch with mushroom";
          break;
      }
      div.append(header, para, img);
    }
    soupDiv.append(div);
  }

  // Create divs with main course options
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, para, img);

    switch (i) {
      case 0:
        header.textContent = "Kyiv cutlet with mashed potatoes";
        para.textContent = "Price - 245Czk";
        img.src = imageThree;
        img.alt = "Kyiv cutlet with mashed potatoes";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat)";
        para.textContent = "Price - 205Czk";
        img.src = imageFour;
        img.alt = "Holubtsi (cabbage rolls with meat)";
        break;
      case 2:
        header.textContent = "Nalysnyky stuffed with pork tongues";
        para.textContent = "Price - 180Czk";
        img.src = imageFive;
        img.alt = "Nalysnyky stuffed with pork tongues";
        break;
      case 3:
        header.textContent = " Varenyky with potato filling";
        para.textContent = "Price - 110Czk";
        img.src = imageSix;
        img.alt = "Varenyky with potato filling";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad";
        para.textContent = "Price - 90Czk";
        img.src = imageSeven;
        img.alt = "Deruns with sour cream and salad";
        break;
      case 5:
        header.textContent = "Salo with borsch (two types of lard)";
        para.textContent = "Price - 70Czk";
        img.src = imageEight;
        img.alt = "Salo with borch (two types of lard)";
        break;
    }
    mainCoursesDiv.append(div);
  }

  // Create divs with desserts options
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, para, img);

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries";
        para.textContent = "Price - 120Czk";
        img.src = imageNine;
        img.alt = "Varenyky with sour cherries";
        img.break;
      case 1:
        header.textContent = "Cottage cheese pancakes";
        para.textContent = "Price - 115Czk";
        img.src = imageTen;
        img.alt = "Cottage cheese pancakes";
        break;
    }
    dessertsDiv.append(div);
  }
}
