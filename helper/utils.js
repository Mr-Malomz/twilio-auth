import { Client, Account } from 'appwrite';

//create client
const client = new Client();
client.setEndpoint('http://127.0.0.1/v1').setProject('632a4573175fcb99d621');

//create account
const account = new Account(client);

//authenticate user with phone number
export const phoneAuth = (phone_number) => {
  return account.createPhoneSession('632a4c40f3e29cfb7834', phone_number);
};

//validate code
export const validateSMS = (userID, secret) => {
  return account.updatePhoneSession(userID, secret);
};

//get currently logged in user
export const getAccount = () => {
  return account.get();
};

//logout user
export const logOutAccount = () => {
  return account.deleteSession('current');
};
