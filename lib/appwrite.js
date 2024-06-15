import { Client, Account, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.ahuanmarca.aora',
  projectId: '666de5da0014f8f066af',
  databaseId: '666dea220014b48028a6',
  userCollectionId: '666dea72003b19dc7afb',
  videoCollectionId: '666deac30035bd106b2c',
  storageId: '666dee590013e5eba86e',
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
