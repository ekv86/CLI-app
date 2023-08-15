const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts)
        case "get":
            const contact = await contacts.getContactById(id);
            return console.log(contact)
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact)
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact)

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "add", name: "Lucy Braun", email: "lucy@gmail.com", phone: "+397867865674" });
// invokeAction({ action: "remove", id: "e6ywwRe4jcqxXfCZOj_1e" });

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
// console.log(process.argv);
invokeAction(argv);