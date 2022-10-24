import { Mobile } from "./mobile";

let myMobile = new Mobile("Iphone", "Apple", "11 Pro Max", "Verde", 1100)

myMobile.setName("Abejorro")
console.log(myMobile.getName())

myMobile.setTrademark("Madrenatura")
console.log(myMobile.getTrademark())

myMobile.setModel("14")
console.log(myMobile.getModel())

myMobile.setColor("Azul")
console.log(myMobile.getColor())

myMobile.setPrice(500)
console.log(myMobile.getPrice())
