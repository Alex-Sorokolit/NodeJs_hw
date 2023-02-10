const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contactsData = JSON.parse(fileContent);
    console.log(contactsData);
    return contactsData;
  } catch (error) {
    console.log(error.message);
  }
}
// listContacts();

async function getContactById(contactId) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);
    const contact = contactsData.filter((c) => c.id === contactId);
    console.log(contact);
  } catch (error) {
    console.log(error.message);
  }
}
getContactById("5");

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
