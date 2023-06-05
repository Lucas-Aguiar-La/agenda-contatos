function addContact() {
  let contactList = document.getElementById("contactList");

  let h3 = document.createElement("h3");
  h3.innerText = "Contato";

  let ul = document.createElement("ul");

  let nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement("br"));

  let phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  let phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement("br"));

  let addressLi = document.createElement("li");
  addressLi.innerText = "Endereço: ";
  let addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement("br"));

  contactList.append(h3, ul);
}

function removeContact() {
  let contactList = document.getElementById("contactList");

  let titles = document.getElementsByTagName("h3");
  let contacts = document.getElementsByTagName("ul");

  let lastTitle = titles[titles.length - 1];
  let lastContact = contacts[contacts.length - 1];

  if (lastTitle && lastContact) {
    contactList.removeChild(lastTitle);
    contactList.removeChild(lastContact);
  }
}
