const fs = require('fs/promises');
const path = require('path');
const {nanoid} = require('nanoid');

const contactsPath = path.join(__dirname, '/db/contacts.json');


async function listContacts() {
    // ...твій код. Повертає масив контактів.
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        const allContacts = JSON.parse(data);
        
        return allContacts || null;
        
    } catch (error) {
        console.error(error);
    }
    
  }
  
  async function getContactById(contactId) {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    if (!contactId) {
        return "ID is required";
    }
    
    try {
        const allContacts = await listContacts();

        if (!allContacts) {
            throw new error("A list of all contacts was not received.");
        }

        const selectedContact = allContacts.filter((contact)=>{ 
            return contact.id === contactId;
        });
        if (selectedContact.length === 0) {
            return "Contact not found";
        }
        // console.log(selectedContact);
        return selectedContact;

    } catch (error) {
        return error;
    }

  }
  
  async function removeContact(contactId) {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    if (!contactId) {
        
        return "ID is required";
    }
    
    try {
        const allContacts = await listContacts();
        if (!allContacts) {
            throw new error("A list of all contacts was not received.");
        }
        
        const selectedContact = await allContacts.filter((contact) => {
            return contact.id === contactId;
        })

        const newVersion = allContacts.filter((contact)=>{ return contact.id !== contactId});
        
        await fs.writeFile(contactsPath,JSON.stringify(newVersion, "", 2));
        return selectedContact;

    } catch (error) {
        return error;
    }

  }
  
  async function addContact(name, email, phone) {
    // ...твій код. Повертає об'єкт доданого контакту. 
    try {
        const allContacts = await listContacts();
        if (!allContacts) {
            throw new error("A list of all contacts was not received.");
        }
        
        const newContact = {
            id: nanoid(),
            name,
            email, 
            phone,
        };

        allContacts.push(newContact);

        await fs.writeFile(contactsPath,JSON.stringify(allContacts, '', 2));
    
        return newContact;
    } catch (error) {
        return error;
    }
  }

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}