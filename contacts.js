const path = require("path");
const fs = require("fs").promises;
// const contacts = require("./db/contacts.json");
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

async function removeContact(contactId) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);
    const actualContacts = contactsData.filter(
      (contact) => contact.id !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(actualContacts));
  } catch (error) {
    console.log(error.message);
  }
}
removeContact("11");

async function addContact(name, email, phone) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);
    const actualContacts = [...contactsData, { id: "12", name, email, phone }];
    await fs.writeFile(contactsPath, JSON.stringify(actualContacts));
  } catch (error) {
    console.log(error.message);
  }
}
// addContact("Alex Tail", "tail@gmail.com", "(992) 915-3791");
