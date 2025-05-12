import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const oldContacts = await readContacts();
        const newContact = [createFakeContact()];

        await writeContacts([...oldContacts, ...newContact]);
    } catch (error) {
        console.log(error.message);
    }
};

addOneContact();
