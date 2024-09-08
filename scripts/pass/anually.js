import Pass from "./pass.js"

class Anually extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = this.getPrice(vehicle.type)
        this.expiry = this.getExpiry()
    }
    getPrice(type){
        switch(type){
            case "cycle":
                return 1500
            case "bike":
                return 3000
            case "car":
                return 5500
        }
    }
    getExpiry(){
        let currentDateTime = new Date()
        currentDateTime.setFullYear(currentDateTime.getFullYear() + 1)
        return currentDateTime
    }
}

export default Anually