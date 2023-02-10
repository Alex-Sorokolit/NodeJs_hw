const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contactsData = JSON.parse(fileContent);
    return contactsData;
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
