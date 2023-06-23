export { renderHomePage, renderNonChangeableElements };
import imageOne from "../src/images/exterior.jpeg";
import imageTwo from "../src/images/interior.jpg";
import imageThree from "../src/images/counter.jpg";
// Load a favicon for a page to use in an index html file
import favicon from "../src/images/logo.jpg";

// Section where tab browsering works
function renderNonChangeableElements() {
  const div = document.createElement("div");
  div.classList.add("top-section");
  document.body.prepend(div);

  // Create 3 'tabs' for tab browsering
  for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = i === 0 ? "Home" : i === 1 ? "Menu" : "Contact";

    switch (i) {
      case 0:
        btn.classList.add("Home-btn");
        btn.disabled = true;
        break;
      case 1:
        btn.classList.add("Menu-btn");
        break;
      case 2:
        btn.classList.add("Contact-btn");
        break;
    }
    div.append(btn);
  }

  // Footer for all three tabs
  const footer = document.createElement("footer");
  const paragraph = document.createElement("p");
  const link = document.createElement("a");

  footer.setAttribute("id", "footer");
  paragraph.classList.add("github-link");
  link.target = "_blank";
  link.href = "https://github.com/silenceinspace";
  link.textContent = "GitHub account";

  document.body.append(footer);
  footer.append(paragraph);
  paragraph.append(link);
}

// Section where all initial content is shown
function renderHomePage(div) {
  // Create elements
  const middleSectionDiv = document.createElement("div");
  const restaurantImagesDiv = document.createElement("div");
  const textSideDiv = document.createElement("div");
  const heroTitleHeader = document.createElement("h1");
  const additionToHeroTitleHeader = document.createElement("h3");
  const restaurantStoryPara = document.createElement("p");
  const catchyTextHeader = document.createElement("h3");
  const tableWithSchedule = document.createElement("table");
  const tableHeader = document.createElement("th");
  const addressInfoHeader = document.createElement("h3");

  // Classes
  middleSectionDiv.classList.add("home-section");
  textSideDiv.classList.add("text");
  restaurantImagesDiv.classList.add("images");

  // Text content
  heroTitleHeader.textContent = "The Borsch";
  additionToHeroTitleHeader.textContent =
    "A place to return to for the best Ukrainian borsch in Prague!";
  restaurantStoryPara.textContent =
    " Our cozy restaurant was opened back in 2021. As our main mission we saw the need to spread the word about the Ukrainian culture abroad and one of its biggest achievements - soup called borsch. Some people say it's just tasty soup, but we think there is more to it. The history, the symbol of true identity and the strongest nation.";
  catchyTextHeader.textContent = `If that sounds interesting to you, please consider stopping by for a bowl of our special Ukrainian elixir !
    P.S. we also have other delicious Ukrainian tratidional food to try:D
    `;
  tableHeader.textContent = "We are open:";
  addressInfoHeader.textContent =
    "Our Address: U Vodarny 10, 130 00 Prague 3 - Vinohrady";

  // Append elements
  div.append(middleSectionDiv);
  middleSectionDiv.append(textSideDiv, restaurantImagesDiv);
  tableWithSchedule.append(tableHeader);

  textSideDiv.append(
    heroTitleHeader,
    additionToHeroTitleHeader,
    restaurantStoryPara,
    catchyTextHeader,
    tableWithSchedule,
    addressInfoHeader
  );

  // Create img elements to show the restaurant's pictures
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    // Images are loaded through webpack at the top
    img.src = i === 0 ? imageOne : i === 1 ? imageTwo : imageThree;
    img.alt =
      i === 0
        ? "Restaurant's exterior"
        : i === 1
        ? "Restaurant's interior"
        : "Bar counter in the restaurant";
    img.height = "350";
    img.width = "350";
    restaurantImagesDiv.append(img);
  }

  // Create a table with work hours for all 7 days
  tableHeader.colSpan = "2";
  for (let i = 0; i < 7; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      const tableData = document.createElement("td");
      if (j === 1 && i < 5) {
        tableData.textContent = "11:00-19:00";
      }

      if (j === 0) {
        switch (i) {
          case 0:
            tableData.textContent = "Monday";
            break;
          case 1:
            tableData.textContent = "Tuesday";
            break;
          case 2:
            tableData.textContent = "Wednesday";
            break;
          case 3:
            tableData.textContent = "Thursday";
            break;
          case 4:
            tableData.textContent = "Friday";
        }
      }

      if (i === 5) {
        tableData.textContent = j === 0 ? "Saturday" : "11:00-18:00";
      }

      if (i === 6) {
        tableData.textContent = j === 0 ? "Sunday" : "Closed";
      }

      tableRow.append(tableData);
    }
    tableWithSchedule.append(tableRow);
  }
}
