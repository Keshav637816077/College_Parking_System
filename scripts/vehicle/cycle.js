import Vehicle from "./vehicle.js";

class Cycle extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type = "cycle" 
    }
}

export default Cycle