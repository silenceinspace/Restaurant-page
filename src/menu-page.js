export { renderMenu };

const divContent = document.body.querySelector("#content");

function renderMenu() {
  // create html elements in DOM
  const menuDiv = document.createElement("div");
  const currentPageTitle = document.createElement("h1");
  const soupsDiv = document.createElement("div");
  const soupTitle = document.createElement("h2");
  const mainCoursesDiv = document.createElement("div");
  const dessertsDiv = document.createElement("div");
  const dessertsTitle = document.createElement("h2");
  const mainCoursesTitle = document.createElement("h2");

  // add class names to elements in DOM
  menuDiv.classList.add("menu-section");
  soupsDiv.classList.add("soups");
  mainCoursesDiv.classList.add("main-courses");
  dessertsDiv.classList.add("desserts");

  // add text to elements in DOM
  currentPageTitle.textContent = "Our menu";
  soupTitle.textContent = "Soups";
  mainCoursesTitle.textContent = "Ukrainian specialities";
  dessertsTitle.textContent = "Desserts";

  // append DOM elements other DOM elements
  divContent.append(menuDiv);
  soupsDiv.append(soupTitle);
  mainCoursesDiv.append(mainCoursesTitle);
  dessertsDiv.append(dessertsTitle);
  menuDiv.append(currentPageTitle, soupsDiv, mainCoursesDiv, dessertsDiv);

  // divs with soup options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const image = document.createElement("img");
      image.height = "350";
      image.width = "350";

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l - 99Czk";
          image.src = "../src/images/menu/beef borsch.jpg";
          break;
        case 1:
          header.textContent =
            "Vegetarian borscht with spruce mushroom 0.4l - 99Czk";
          image.src = "../src/images/menu/Vegeterian borsch.png";
          break;
      }
      div.append(header, image);
    }
    soupsDiv.append(div);
  }

  // divs with main course optins on the menu
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, img);

    img.height = "350";
    img.width = "350";

    switch (i) {
      case 0:
        header.textContent = "Kyiv cutlet with mashed potatoes - 245Czk";
        img.src = "../src/images/menu/Kyiv cutlet.png";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat) - 205Czk";
        img.src = "../src/images/menu/Holubtsi.png";
        break;
      case 2:
        header.textContent =
          "Nalysnyky stuffed with pork tongues and mushrooms served with asparagus - 180Czk";
        img.src = "../src/images/menu/Nalysnyky.png";
        break;
      case 3:
        header.textContent =
          " Varenyky with potato filling (bags filled with potatoes) - 110Czk";
        img.src = "../src/images/menu/Varenyky.png";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad - 90Czk";
        img.src = "../src/images/menu/Deruns.png";
        break;
      case 5:
        header.textContent = "Salo with borscht (two types of lard) - 70Czk";
        img.src = "../src/images/menu/Salo.png";
        break;
    }
    mainCoursesDiv.append(div);
  }

  // divs with desserts options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    const header = document.createElement("h3");
    const image = document.createElement("img");
    div.append(header, image);

    // do it in CSS instead of JS?
    image.height = "350";
    image.width = "350";

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries - 120Czk";
        image.src = "../src/images/menu/Sweet varenyky.png";
        break;
      case 1:
        header.textContent = "Cheesecakes (cottage cheese pancakes) - 115Czk";
        image.src = "../src/images/menu/Cheesecakes.png";
        break;
    }
    dessertsDiv.append(div);
  }
}
