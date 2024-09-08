import User from "./user.js";

class Faculty extends User{
    constructor(name , contact) {
        super(name , contact)
        this.role = "faculty"
        }
}

export default Faculty