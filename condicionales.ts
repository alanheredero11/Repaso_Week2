

function zodiac(day: number, month: number): string {                      //indicar el dia y el mes en formato numerico

    let resultado: string = "";
    
    if (day == 21 && month == 3 || day <= 19 && month == 4){
            resultado = "Aries";
        }
        else if (day >= 20 && month == 4 || day <= 20 && month == 5){
            resultado = "Taurus"; 
        }
        else if (day >= 21 && month == 5 || day <= 20 && month == 6){
            resultado = "Gemini";
        }
        else if (day >= 21 && month == 6 || day <= 22 && month == 7){
            resultado = "Cancer";
        }   
        else if (day >= 23 && month == 7 || day <= 22 && month == 8){
            resultado = "Leo";
        }
        else if (day >= 23 && month == 8 || day <= 22 && month == 9){
            resultado = "Virgo";
        }            
        else if (day >= 23 && month == 9 || day <= 22 && month == 10){
            resultado = "Libra";
        }        
        else if (day >= 23 && month == 10 || day <= 21 && month == 11){
            resultado = "Scorpio";
        } 
        else if (day >= 22 && month == 11 || day <= 21 && month == 12){
            resultado = "Sagittarius";
        }
        else if (day >= 22 && month == 12 || day <= 19 && month == 1){
            resultado = "Capricorn";
        }
        else if (day >= 20 && month == 1 || day <= 18 && month == 2){
            resultado = "Aquarius";
        }
        
        else if (day >= 19 && month == 2 || day <= 20 && month == 3){
            resultado = "Pisces";
        }
    return resultado
}

function continent(country:string){
    
    let resultado: string = "";

    if (country == "España" || country == "Francia" || country == "Inglaterra"  || country == "Italia" || country == "Portugal"){
        resultado = "Europa"
    }
    else if (country == "Estados Unidos" || country == "Canada" || country == "Colombia" || country == "Argentina" || country == "Chile") {
        resultado = "America"
    }
    else if (country == "Sud Africa" || country == "Congo" || country == "Ghana" || country == "Camerun" || country == "Costa de Marfil") {
        resultado = "Africa"
    }
    else if (country == "China" || country == "India" || country == "Japon" || country == "Corea del sud" || country == "Vietnam") {
        resultado = "Asia"
    }
    else if (country == "Australia" || country == "Papua Nueva Guinea" || country == "Tonga" || country == "Nueva Zelanda" || country == "Fiyi") {
        resultado = "Oceania"
    }

    console.log(resultado)
}

export function isEven(number: number){

    if (number % 2 == 0){
        console.log("El numero es par");
    }
    else{
        console.log("El numero es impar");
    }
}


