import { Client, Account } from 'appwrite';

//create client
const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('63276bcf4bd7f83f71c7');

//create account
const account = new Account(client);

//authenticate user with phone number
export const phoneAuth = (phone_number) => {
  return account.createPhoneSession('unique()', phone_number);
  // return account.createAnonymousSession();
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
