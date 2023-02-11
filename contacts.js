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

async function getContactById(contactId) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);
    const contact = contactsData.filter((contact) => contact.id === contactId);
    console.log(contact);
  } catch (error) {
    console.log(error.message);
  }
}

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

async function addContact(name, email, phone) {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf-8" });
    const contactsData = JSON.parse(fileContent);

    const maxId = contactsData.reduce((acc, contact) => {
      if (Number(contact.id) > acc) {
        acc = contact.id;
      }
      return acc;
    }, 0);
    const id = String(Number(maxId) + 1);

    const actualContacts = [...contactsData, { id, name, email, phone }];
    await fs.writeFile(contactsPath, JSON.stringify(actualContacts));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
