import { Client, Account } from 'appwrite';

//create client
const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('632a4573175fcb99d621');

//create account
const account = new Account(client);

//authenticate user with phone number
export const phoneAuth = (phone_number) => {
  return account.createPhoneSession('unique()', phone_number);
};

//validate phone session
export const validateSMS = (userID, secret) => {
  return account.updatePhoneSession(userID, secret);
};
