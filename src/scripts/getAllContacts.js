import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        return readContacts();
    } catch (error) {
        console.log(error.message);
    }
};

console.log(await getAllContacts());
