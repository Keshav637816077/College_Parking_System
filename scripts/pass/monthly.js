import Pass from "./pass.js"

class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
        this.price = this.getPrice(vehicle.type)
        this.expiry = this.getExpiry()
    }
    getPrice(type){
        switch(type){
            case "cycle":
                return 150
            case "bike":
                return 500
            case "car":
                return 1500
        }
    }
    getExpiry(){
        let currentDateTime = new Date()
        currentDateTime.setMonth(currentDateTime.getMonth() + 1)
        return currentDateTime
    }
}

export default Monthly