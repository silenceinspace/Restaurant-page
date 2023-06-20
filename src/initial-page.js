export { renderTopSection, renderMiddleSection, renderFoofer };

const divContent = document.body.querySelector("#content");

// Section where tab browsering will work
function renderTopSection() {
  const divTopSection = document.createElement("div");
  divTopSection.classList.add("top-section");
  divContent.append(divTopSection);

  for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = i === 0 ? "Home" : i === 1 ? "Menu" : "Contact";
    divTopSection.append(btn);
  }
}

// Section where all initial content will be shown
function renderMiddleSection() {
  const divMiddleSection = document.createElement("div");
  divMiddleSection.classList.add("home-section");
  divContent.append(divMiddleSection);

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "The Borsch";
  divMiddleSection.append(heroTitle);

  const divRestaurantPhotos = document.createElement("div");
  divRestaurantPhotos.classList.add("images");
  divMiddleSection.append(divRestaurantPhotos);
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    img.src =
      i === 0
        ? "../src/images/exterior.jpeg"
        : i === 1
        ? "../src/images/interior.jpg"
        : "../src/images/counter.jpg";
    img.height = "350";
    img.width = "350";
    divRestaurantPhotos.append(img);
  }

  const shortDescription = document.createElement("h3");
  shortDescription.textContent =
    "A place to return to for the best Ukrainian borsch in Prague!";
  divMiddleSection.append(shortDescription);

  const restaurantStory = document.createElement("p");
  restaurantStory.textContent =
    " Our cozy restaurant was opened back in 2021. As our main mission we saw the need to spread the word about the Ukrainian culture abroad and one of its biggest achievements - soup called borsch. Some people say it's just tasty soup, but we think there is more to it. The history, the symbol of true identity and the strongest nation.";
  divMiddleSection.append(restaurantStory);

  const offerForVisiting = document.createElement("h3");
  offerForVisiting.textContent =
    "If that sounds interesting to you, please consider stopping by for a bowl of our special Ukrainian elixir!";
  divMiddleSection.append(offerForVisiting);

  const tableWithSchedule = document.createElement("table");
  divMiddleSection.append(tableWithSchedule);

  const tableHeader = document.createElement("th");
  tableHeader.textContent = "We are open";
  tableWithSchedule.append(tableHeader);

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

  const addressHomePage = document.createElement("div");
  divMiddleSection.append(addressHomePage);
  const addressBoldText = document.createElement("h3");
  addressBoldText.textContent =
    "Our Address: U Vodarny 10, 130 00 Prague 3 - Vinohrady";
  addressHomePage.append(addressBoldText);
}

function renderFoofer() {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");
  divContent.append(footer);

  const paragraph = document.createElement("p");
  paragraph.classList.add("github-link");
  footer.append(paragraph);

  const link = document.createElement("a");
  link.target = "_blank";
  link.href = "https://github.com/silenceinspace";
  link.textContent = "GitHub account";
  paragraph.append(link);
}
