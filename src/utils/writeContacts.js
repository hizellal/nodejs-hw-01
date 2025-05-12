import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const json = JSON.stringify(updatedContacts, undefined, 2);
    const data = await fs.writeFile(PATH_DB, json);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};