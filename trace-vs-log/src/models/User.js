class User {
    constructor(id, name, email, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.membershipType = 'basic';
    }

    upgradeMembership() {
        // console.log('Upgrading membership');  // Using console.log
        this.membershipType = 'premium';
    }
}

module.exports = User;