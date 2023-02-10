const path = require("path");
const fs = require("fs").promises;
const contacts = require("./db/contacts.json");
// console.log(contacts);

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
// getContactById("5");

function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);
    const actualContacts = [...contactsData, { id: "11", name, email, phone }];
    await fs.writeFile("upgradeContacts.json", JSON.stringify(actualContacts));
  } catch (error) {
    console.log(error.message);
  }
}
// addContact("Alex Tail", "tail@gmail.com", "(992) 915-3791");
