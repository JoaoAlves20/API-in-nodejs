import users from "../mocks/users";

let listUsers = users;

class UserService {
    findAll(orderData) {
        return new Promise((resolve) => {
            const sortedusers = listUsers.sort((a, b) => {
                if (orderData === "desc") {
                    return a.id < b.id ? 1 : -1;
                };

                return a.id > b.id ? 1 : -1;
            })

            return resolve(sortedusers);
        })
    }

    findById(idUser) {
        return new Promise((resolve) => {
            const findId = listUsers.find((user) => user.id === +idUser)

            return resolve(findId);
        })
    }

    create(body) {
        return new Promise((resolve) => {
            const lastUserId = listUsers[listUsers.length - 1].id;
            const newUser = {
                id: lastUserId + 1,
                firstName: body.firstName,
                lastName: body.lastName
            };
            listUsers.push(newUser)

            return resolve(newUser);
        })
    }

    update(idUser, firstName, lastName) {
        return new Promise((resolve) => {
            listUsers = listUsers.map((user) => {
                if (user.id === +idUser) {
                    return {
                        ...user,
                        firstName,
                        lastName
                    };
                };

                return user;
            });

            return resolve({ idUser, firstName, lastName })
        })
    }

    delete(idUser) {
        return new Promise((resolve) => {
            listUsers = listUsers.filter((user) => user.id !== +idUser);

            return resolve(listUsers);
        })
    }
}

export default new UserService();