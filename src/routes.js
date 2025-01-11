import { UserController } from './controllers/UserController.js';

export const router = [
    {
        method: 'GET',
        endpoint: '/users',
        handler: UserController.findAll,
    },
    {
        method: 'GET',
        endpoint: '/users/:id',
        handler: UserController.findById,
    },
    {
        method: 'PUT',
        endpoint: '/users/:id',
        handler: UserController.updateUser,
    },
    {
        method: 'POST',
        endpoint: '/users',
        handler: UserController.createUser,
    },
    {
        method: 'DELETE',
        endpoint: '/users/:id',
        handler: UserController.deleteUser,
    },
];