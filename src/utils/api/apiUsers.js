import { ApiCore } from './core';

const url = 'users';
const plural = 'users';
const single = 'user';

// plural and single may be used for message logic if needed in the ApiCore class.

export const apiUsers = new ApiCore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    delete: true,
    url: url,
    plural: plural,
    single: single,
});

apiUsers.massUpdate = () => {
    // Add custom api call logic here
};
