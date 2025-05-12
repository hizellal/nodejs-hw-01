import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const oldContacts = await readContacts();

        return oldContacts.length;
    } catch (error) {
        console.log(error.message);
    }
};

console.log(await countContacts());
