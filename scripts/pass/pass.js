import Vehicle from "../vehicle/vehicle.js";

class Pass{
    constructor(vehicle){
        this.vehicle = vehicle
    }

    print(){
        let passToBePrint =`
        <label for="">Name</label>
        <label for="">${this.vehicle.owner.name}</label>
        <label for="">Vehicle id</label>
        <label for="">${this.vehicle.id}</label>
        <label for="">Expiry</label>
        <label for="">${this.expiry}</label>
        <img src="https://quickchart.io/qr?text=${this.expiry}&size=200' alt="qr" />
        `
        const pass = document.querySelector('.pass')
        pass.innerHTML = passToBePrint
    }
}

export default Pass