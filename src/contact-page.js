export { renderContacts };

const divContent = document.body.querySelector("#content");

function renderContacts() {
  const contactsDiv = document.createElement("div");
  contactsDiv.classList.add("contact-section");
  divContent.append(contactsDiv);

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Our contacts";
  contactsDiv.append(pageHeader);

  for (let i = 0; i < 3; i++) {
    const header = document.createElement("h3");
    switch (i) {
      case 0:
        header.textContent =
          "Address - U Vodarny 10, Vinohrady, 130 00 Praha-Praha 3, Czechia";
        break;
      case 1:
        header.textContent = "Phone number - +420 111 111 111";
        break;
      case 2:
        header.textContent = "Email - theborscht@gmail.com";
        break;
    }
    contactsDiv.append(header);
  }
}
