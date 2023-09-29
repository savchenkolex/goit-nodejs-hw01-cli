const {listContacts, getContactById, removeContact, addContact} = require('./contacts.js');
const {program } = require('commander');

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone')

program.parse(process.argv);
const options = program.opts();

async function invokeAction({action, id, name, email, phone}) {
    switch (action) {
        case 'list':
            const list = await listContacts();
            console.log(list);
            break;
        case "get":
            const contact = await getContactById(id); 
            console.log(contact);
            break;
        case "add":
            const response = await addContact(name, email, phone);
            console.log(response);
            break;
        case "remove":
            const removed = await removeContact(id);
            console.log(removed);
            break;    
        default:
            console.warn('\x1B[31m Unknown action type!');
            break;
    }
}

invokeAction(options);