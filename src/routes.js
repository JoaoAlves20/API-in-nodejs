import { UserController } from './controllers/UserController.js';

export const router = [
    {
        method: 'GET',
        endpoint: '/users',
        handler: UserController.findAll,
    },
];