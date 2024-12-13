const User = require('../models/User');

class UserService {
    constructor() {
        this.users = new Map();
    }

    createUser(userData) {
        // console.trace('Creating new user');  // Using console.trace
        const user = new User(
            userData.id,
            userData.name,
            userData.email,
            userData.address
        );
        this.users.set(user.id, user);
        return user;
    }

    getUser(id) {
        // console.log('Getting user with ID:', id);  // Using console.log
        return this.users.get(id);
    }
}

module.exports = UserService;