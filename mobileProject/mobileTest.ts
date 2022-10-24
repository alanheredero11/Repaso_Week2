import { Mobile } from "./mobile";

let myMobile1 = new Mobile("Iphone", "Apple", "11 Pro Max", "Verde", 1100)
let myMobile2 = new Mobile("Samsung", "Samsun", "Galaxy Pro", "Azul", 900)
let myMobile3 = new Mobile("Xiaomi", "Huawei", "Readme A11", "Negro", 400)


let myMobiles: Mobile[] = [myMobile1, myMobile2, myMobile3]
// myMobile.setName("Abejorro")
// console.log(myMobile.getName())

// myMobile.setTrademark("Madrenatura")
// console.log(myMobile.getTrademark())

// myMobile.setModel("14")
// console.log(myMobile.getModel())

// myMobile.setColor("Azul")
// console.log(myMobile.getColor())

// myMobile.setPrice(500)
// console.log(myMobile.getPrice())

for (let i = 0; i < myMobiles.length; i++){

    myMobiles[i].printAll()
}