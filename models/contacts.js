// const fs = require("fs/promises");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");

// const contactsPath = path.join(__dirname, "/contacts.json");

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const contactById = contacts.find((contact) => contact.id === contactId);
//   return contactById || null;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const [removeContact] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return removeContact;
// };

// const addContact = async ({ name, email, phone }) => {
//   const contacts = await listContacts();
//   const newContact = {
//     id: uuidv4(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex((contact) => contact.id === contactId);
//   if (idx === -1) {
//     return null;
//   }
//   const previousContact = contacts[idx];
//   contacts[idx] = { ...previousContact, ...body };
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[idx];
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };

// baIPSosI0AEEyIB9
// ymakhovska;
// 6j1A5RU5Pa8J9j8a
