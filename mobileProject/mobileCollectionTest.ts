import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let myMobile1 = new Mobile("Iphone", "Apple", "11 Pro Max", "Verde", 1100)
let myMobile2 = new Mobile("Samsung", "Samsun", "Galaxy Pro", "Azul", 900)
let myMobile3 = new Mobile("Xiaomi", "Huawei", "Readme A11", "Negro", 400)
let myMobile4 = new Mobile("Telefono", "Telefono", "UNo A11", "Blanco", 100)

let array_contenedor: Mobile[] = [myMobile1, myMobile2, myMobile3, myMobile4];

let collection: MobileCollection = new MobileCollection(array_contenedor)

// collection.setMobiles([myMobile1, myMobile2, myMobile3])
// collection.setTotalPrice(1000)

// console.log(collection.getMobiles())
console.log(collection.getTotalPrice())
