import User from "./user.js";

class Student extends User{
    constructor(name , contact) {
        super(name , contact)
        this.role = "student"
        }
}

export default Student