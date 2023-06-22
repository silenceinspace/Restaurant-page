export { renderMenu };

function renderMenu(div) {
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
  div.append(menuDiv);
  menuDiv.append(
    currentPageTitle,
    soupTitle,
    soupsDiv,
    mainCoursesTitle,
    mainCoursesDiv,
    dessertsTitle,
    dessertsDiv
  );

  // divs with soup options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const para = document.createElement("p");
      const image = document.createElement("img");

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l";
          para.textContent = "Price - 99Czk";
          image.src = "../src/images/menu/beef borsch.jpg";
          break;
        case 1:
          header.textContent = "Vegetarian borscht with mushroom 0.4l";
          para.textContent = "Price - 99Czk";
          image.src = "../src/images/menu/Vegeterian borsch.png";
          break;
      }
      div.append(header, para, image);
    }
    soupsDiv.append(div);
  }

  // divs with main course optins on the menu
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
        img.src = "../src/images/menu/Kyiv cutlet.png";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat)";
        para.textContent = "Price - 205Czk";
        img.src = "../src/images/menu/Holubtsi.png";
        break;
      case 2:
        header.textContent =
          "Nalysnyky stuffed with pork tongues";
        para.textContent = "Price - 180Czk";
        img.src = "../src/images/menu/Nalysnyky.png";
        break;
      case 3:
        header.textContent = " Varenyky with potato filling";
        para.textContent = "Price - 110Czk";
        img.src = "../src/images/menu/Varenyky.png";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad";
        para.textContent = "Price - 90Czk";
        img.src = "../src/images/menu/Deruns.png";
        break;
      case 5:
        header.textContent = "Salo with borscht (two types of lard)";
        para.textContent = "Price - 70Czk";
        img.src = "../src/images/menu/Salo.png";
        break;
    }
    mainCoursesDiv.append(div);
  }

  // divs with desserts options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const image = document.createElement("img");
    div.append(header, para, image);

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries";
        para.textContent = "Price - 120Czk";
        image.src = "../src/images/menu/Sweet varenyky.png";
        break;
      case 1:
        header.textContent = "Cottage cheese pancakes";
        para.textContent = "Price - 115Czk";
        image.src = "../src/images/menu/Cheesecakes.png";
        break;
    }
    dessertsDiv.append(div);
  }
}
