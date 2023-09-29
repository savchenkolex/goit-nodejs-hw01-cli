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
            try {
                const list = await listContacts();
                console.log(list);
    
            } catch (error) {
                console.warn(error);
            }
            break;
        case "get":
            try {
                const contact = await getContactById(id); 
                console.log(contact);
    
            } catch (error) {
                console.warn(error);
            }
            break;
        case "add":
            try {
                const response = await addContact(name, email, phone);
                console.log(response);
    
            } catch (error) {
                console.warn(error);
            }
            break;
        case "remove":
            try {
                const removed = await removeContact(id);
                console.log(removed);
    
            } catch (error) {
                console.warn(error);
            }
            break;    
        default:
            console.warn('\x1B[31m Unknown action type!');
            break;
    }
}



invokeAction(options);