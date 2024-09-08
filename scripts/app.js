import Faculty from "./user/faculty.js"
import Student from "./user/student.js"
import Cycle from "./vehicle/cycle.js"
import Bike from "./vehicle/bike.js"
import Car from "./vehicle/car.js"
import Daily from "./pass/daily.js"
import Monthly from "./pass/monthly.js"
import Anually from "./pass/anually.js"


document.addEventListener("DOMContentLoaded", () => {
    let name = document.getElementById('userName')
    let contact = document.getElementById('userContact')
    let role = document.getElementById('role')
    const userSaveBtn = document.getElementById('userSaveBtn')
    userSaveBtn.addEventListener('click', e => {
        let user = null
        e.preventDefault()
        if(name.value && contact.value && contact.value.length === 10 && role.value){
            user = role.value === 'student'
                    ? new Student(name.value, contact.value)
                    : new Faculty(name.value, contact.value)

            console.log(user)
            alert('You are succesfully registered !!')
            // alert(Hey ${user.name}! You are succesfully registered !)
            document.querySelector('.user').style.display = 'none'
        }else{
            alert('Please fill out the required fields !')
        }

        let vehicleId = document.getElementById('vehicleId')
        let type = document.getElementById('type')
        const vehicleSaveBtn = document.getElementById('vehicleSaveBtn')
        vehicleSaveBtn.addEventListener('click', e => {
            let vehicle = null
            e.preventDefault()

            if(vehicleId.value && type.value){
                switch(type.value){
                    case 'cycle':
                        vehicle = new Cycle(vehicleId.value, user)
                    break
                    case 'bike':
                        vehicle = new Bike(vehicleId.value, user)
                    break
                    case 'car':
                        vehicle = new Car(vehicleId.value, user)
                    break
                }
                console.log(vehicle)
                alert('Your vehicle is succesfully registered !!')
                // alert(Hey ${user.name}! Your ${vehicle.type} is succesfully registered !)
                document.querySelector('.vehicle').style.display = 'none'
            }else{
                alert('Please fill out the required fields !')
            }

            const passChoice = document.querySelector('.pass-choice')

            let dailyPass = new Daily(vehicle)
            const dailyPassBtn = document.createElement("INPUT")
            dailyPassBtn.setAttribute("type","button")
            dailyPassBtn.setAttribute("value", `Daily : ₹${dailyPass.price}`)
            dailyPassBtn.addEventListener('click' , (e) =>{
                passChoice.style.display = 'none'
                dailyPass.print()
            })
            passChoice.appendChild(dailyPassBtn)

            let monthlyPass = new Monthly(vehicle)
            const monthlyPassBtn = document.createElement("INPUT")
            monthlyPassBtn.setAttribute("type","button")
            monthlyPassBtn.setAttribute("value", `Monthly : ₹${monthlyPass.price}`)
            monthlyPassBtn.addEventListener('click' , (e) =>{
                passChoice.style.display = 'none'
                monthlyPass.print()
            })
            passChoice.appendChild(monthlyPassBtn)

            let anuallyPass = new Anually(vehicle)
            const anuallypassBtn = document.createElement("INPUT")
            anuallypassBtn.setAttribute("type","button")
            anuallypassBtn.setAttribute("value", `Anually : ₹${anuallyPass.price}`)
            anuallypassBtn.addEventListener('click' , (e) =>{
                passChoice.style.display = 'none'
                anuallyPass.print()
            })
            passChoice.appendChild(anuallypassBtn)
        })  
    })
})

