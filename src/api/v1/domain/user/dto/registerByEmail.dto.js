export default class RegisterByEmail {
    constructor( email, password, name, type = "user") {
        this.email = email;
        this.password = password;
        this.name = name;
        this.type = type;
    }
}