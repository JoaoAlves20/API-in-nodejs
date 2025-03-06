import UserService from "../services/UserService";

class UserController {
    async findAll(request, response) {
        try {
            const { order } = request.query;
        
            const users = await UserService(order);

            response.send(200, users);
        } catch (err) {
            response.send(500, { error: err.message })
        }
    }

    async findById(request, response) {
        try {
            const { id } = request.params;
    
            const user = await UserService.findById(id);
            
            if (!user) {
                return response.send(400, { error: "User not found" });
            };
    
            response.send(200, user);
        } catch (err) {
            response.send(500, { error: err.message })
        }
    }

    async createUser(request, response) {
        try {
            const { body } = request;
            
            const newUser = await UserService(body);
            
            response.send(200, newUser);
        } catch (err) {
            response.send(500, { error: err.message })
        }
    }

    async updateUser(request, response) {
        try {
            const { id } = request.params;
            const { firstName, lastName } = request.body;

            const userExists = await UserService.findById(id);

            if (!userExists) {
                return response.send(400, { error: "User not found" });
            };

            const user = await UserService.update(id, firstName, lastName)

            response.send(200, user);
        } catch (err) {
            response.send(500, { error: err.message })
        }
    }

    async deleteUser(request, response) {
        try {
            const { id } = request.params;

            await UserService.delete(id);
            
            response.send(200, { deleted: true });
        } catch (err) {
            response.send(500, { error: err.message })
        }
    }
};

export default new UserController();