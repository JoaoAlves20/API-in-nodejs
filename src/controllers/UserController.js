import { users } from "../mocks/users.js";

let listUsers = users;

export const UserController = {
    findAll: (request, response) => {
        const { order } = request.query;
        
        const sortedusers = listUsers.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1;
            };

            return a.id > b.id ? 1 : -1;
        })

        response.send(200, sortedusers);
    },
    findById: (request, response) => {
        const { id } = request.params;

        const findId = listUsers.find((user) => user.id === id)
        
        if (!findId) {
            return response.send(400, { error: "User not found" });
        };

        response.send(200, findId);
    },
    createUser: (request, response) => {
        const { body } = request;
        
        const lastUserId = listUsers[listUsers.length - 1].id;
        const newUser = {
            id: lastUserId + 1,
            firstName: body.firstName,
            lastName: body.lastName
        };
        listUsers.push(newUser)
        response.send(200, newUser);
    },
    updateUser: (request, response) => {
        let { id } = request.params;
        const { firstName, lastName } = request.body;

        id = Number(id);

        const userExists = listUsers.find((user) => user.id === id);

        if (!userExists) {
            return response.send(400, { error: "User not found" });
        };

        listUsers = listUsers.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    firstName,
                    lastName
                };
            };

            return user;
        });

        response.send(200, { id, firstName, lastName });
    },
    deleteUser: (request, response) => {
        let { id } = request.params;
        id = Number(id);

        listUsers = listUsers.filter((user) => user.id !== id);
        response.send(200, { deleted: true });
    },
};
