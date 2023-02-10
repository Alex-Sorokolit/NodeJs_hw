// import { nanoid } from "nanoid";

const path = require("path");
const fs = require("fs").promises;

// fs.writeFile("one.txt", "some text", (err) => {
//   if (err) {
//     console.log(err.message);
//   }
// });
const contactsPath = path.resolve("../db/contacts.json");
// console.log(contactsPath);

async function getFile() {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contactsData = JSON.parse(fileContent);
    // console.log(contactsData);
  } catch (error) {
    console.log(error.message);
  }
}
// getFile();

async function copyFile() {
  try {
    const fileContent = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contactsData = JSON.parse(fileContent);
    console.log(contactsData);
    await fs.writeFile("contacts2.json", JSON.stringify(contactsData));
  } catch (error) {
    console.log(error.message);
  }
}
// copyFile();

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
addContact("Alex Sorokolit", "sorokoligal@gmail.com", "+380980145051");
