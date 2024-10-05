import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

...

const authData = await pb.admins.authWithPassword('test@example.com', '1234567890');

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated account
pb.authStore.clear();