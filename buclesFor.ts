

function evenNumber(num: number){

    let array: number[] = [];
    for (let i = 1; i < num; i++){
        array.push(i)
    }
    for (let i = 0; i < array.length; i++){

        if(array[i]%2 != 0){
            console.log(array[i])
        }
    }
}

// evenNumber(10)

function myRevert(myArr: any[]): any[]{

    let array_resultado: any[] = [];
    for (let i = 0; i < myArr.length; i++){
        array_resultado.unshift(myArr[i])
    }
    return array_resultado;
}

// console.log(myRevert([1, 2, 3, 4, 5]))


function isRainbow(colors: string[]){

    let rainbow_colors: string[] = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violete"]
    

    for (let i= 0; i < colors.length; i++){

        let resultado: string = "El " + colors[i] + "  NO esta en el arcoiris"

        for (let e = 0; e < rainbow_colors.length && resultado == "El " + colors[i] + "  NO esta en el arcoiris"; e++){

            if (colors[i] == rainbow_colors[e]){
                resultado = "El " + colors[i] + " esta en el arcoiris"
            }
        }
        console.log(resultado)
    }
}

// isRainbow(["rojo", "negro", "azul", "magenta", "amarillo"])

export function add(myWords: string[]):number{

    let resultado: number = 0;

        for (let i = 0; i < myWords.length; i++){

            resultado += myWords[i].length
        }

    return resultado
}

// console.log(add(["rojo", "negro", "azul", "magenta", "amarillo"]))